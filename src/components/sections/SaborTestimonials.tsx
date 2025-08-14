import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const SaborTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'Os doces do Sabor do Céu são simplesmente divinos! O bolo do aniversário da minha filha foi um sucesso total. Todos os convidados elogiaram muito.',
      rating: 5,
      location: 'São Paulo, SP'
    },
    {
      name: 'João Santos',
      text: 'Já pedi várias vezes os pães de mel e sempre fico impressionado com a qualidade. São macios, saborosos e chegam sempre fresquinhos. Recomendo muito!',
      rating: 5,
      location: 'Itapevi, SP'
    },
    {
      name: 'Ana Oliveira',
      text: 'Contratei o serviço para o chá de bebê da minha sobrinha e foi perfeito! A apresentação estava linda e o sabor... sem palavras! Parabéns pelo trabalho!',
      rating: 5,
      location: 'Barueri, SP'
    },
    {
      name: 'Carlos Ferreira',
      text: 'A cesta de presente que comprei para minha esposa foi um acerto total! Ela ficou encantada com a variedade e qualidade dos doces. Voltarei a comprar com certeza.',
      rating: 5,
      location: 'Itapevi, SP'
    },
    {
      name: 'Luciana Costa',
      text: 'Descobri o Sabor do Céu através de uma amiga e me tornei cliente fiel. Os doces são artesanais de verdade, você sente o carinho em cada mordida.',
      rating: 5,
      location: 'Barueri, SP'
    },
    {
      name: 'Roberto Lima',
      text: 'Para nossa festa de casamento, escolhemos o Sabor do Céu e não nos arrependemos. A mesa de doces estava linda e deliciosa. Nossos convidados não paravam de elogiar!',
      rating: 5,
      location: 'São Paulo, SP'
    }
  ];

  return (
    <section ref={sectionRef} id="depoimentos" className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-center">Depoimentos</h2>
          <p className="section-subtitle text-center mx-auto">
            Veja o que nossos clientes dizem sobre nossos doces
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
            >
              <Quote className="h-8 w-8 text-pink-300 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="border-t pt-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-700 font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaborTestimonials;
