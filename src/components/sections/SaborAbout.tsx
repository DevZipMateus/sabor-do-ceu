
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Clock } from 'lucide-react';

const SaborAbout = () => {
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

  const features = [
    {
      icon: Heart,
      title: 'Feito com Amor',
      description: 'Cada doce é preparado com muito carinho e dedicação'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Ingredientes selecionados e receitas exclusivas'
    },
    {
      icon: Clock,
      title: 'Sempre Fresquinho',
      description: 'Produtos preparados no dia da entrega'
    }
  ];

  return (
    <section ref={sectionRef} id="sobre" className="py-16 lg:py-24 bg-white">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-center">Nossa História</h2>
          <p className="section-subtitle text-center mx-auto">
            Uma jornada de superação e paixão pela confeitaria
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Em 2021, durante um período de desemprego, descobri uma paixão que mudaria minha vida. 
                Tudo começou com uma simples aula de pão de mel no Facebook. Aquela primeira receita 
                despertou em mim algo especial.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Após alguns anos, me casei e, novamente desempregada, decidi retomar os pães de mel. 
                Comecei vendendo nas ruas, descobrindo que realmente amava o que fazia. Foi então 
                que decidi me profissionalizar e fiz um curso de confeitaria.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Agora, em 2025, estou pronta para iniciar oficialmente o <strong>Sabor do Céu</strong> - 
                um sonho que nasceu da necessidade e se transformou em paixão. Cada doce que faço 
                carrega essa história de determinação e amor pela confeitaria.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-xl border border-pink-100"
              >
                <feature.icon className="h-8 w-8 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaborAbout;
