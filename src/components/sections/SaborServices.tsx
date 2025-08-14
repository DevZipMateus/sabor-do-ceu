
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Cake, Heart, Cookie, Coffee, PartyPopper } from 'lucide-react';

const SaborServices = () => {
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

  const services = [
    {
      icon: Cake,
      title: 'Bolos Personalizados',
      description: 'Bolos únicos para suas celebrações especiais, feitos sob medida com os sabores que você mais ama.',
      features: ['Diversos sabores', 'Decoração personalizada', 'Diferentes tamanhos']
    },
    {
      icon: Heart,
      title: 'Pães de Mel',
      description: 'Nossa especialidade! Pães de mel macios e saborosos, perfeitos para qualquer ocasião.',
      features: ['Receita exclusiva', 'Cobertura de chocolate', 'Embalagem especial']
    },
    {
      icon: Cookie,
      title: 'Doces Artesanais',
      description: 'Uma variedade de doces feitos com ingredientes premium e muito carinho.',
      features: ['Brigadeiros gourmet', 'Beijinhos especiais', 'Trufas artesanais']
    },
    {
      icon: PartyPopper,
      title: 'Kit Festa',
      description: 'Kit completo para suas festas com tudo que você precisa para adoçar a comemoração.',
      features: ['Bolo confeitado', 'Doces diversificados', 'Mini pães de mel', 'Mini cones']
    }
  ];

  return (
    <section ref={sectionRef} id="servicos" className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-center">Nossos Serviços</h2>
          <p className="section-subtitle text-center mx-auto">
            Oferecemos uma variedade de produtos artesanais para adoçar seus momentos especiais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-100 to-blue-100 rounded-full mb-6 mx-auto">
                <service.icon className="h-8 w-8 text-pink-500" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 text-center">
                <a
                  href="https://wa.me/5511991455137?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 font-medium hover:text-pink-600 transition-colors duration-200"
                >
                  Solicitar Orçamento →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaborServices;
