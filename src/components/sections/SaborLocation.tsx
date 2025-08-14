
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const SaborLocation = () => {
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

  const locationInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Alzira Rocha da Silva, 370\nParque Suburbano - São Paulo, SP'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      info: 'Segunda à Sexta: 8h às 18h\nSábado: 8h às 14h\nDomingo: Sob consulta'
    },
    {
      icon: Phone,
      title: 'Contato',
      info: '(11) 9 9145-5137\nmicheleccene@gmail.com'
    },
    {
      icon: Navigation,
      title: 'Entrega',
      info: 'Atendemos toda a região\nEntrega gratuita acima de R$ 80'
    }
  ];

  return (
    <section ref={sectionRef} id="localizacao" className="py-16 lg:py-24 bg-white">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-center">Localização</h2>
          <p className="section-subtitle text-center mx-auto">
            Venha nos conhecer ou solicite entrega em sua casa
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {locationInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-pink-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{item.info}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511991455137?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20com%20entrega"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 text-center"
              >
                Solicitar Entrega
              </a>
              <a
                href="https://www.google.com/maps/search/Alzira+Rocha+da+Silva,+370+Parque+Suburbano+São+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 text-center"
              >
                Ver no Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaborLocation;
