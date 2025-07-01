
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Instagram, Send } from 'lucide-react';

const SaborContact = () => {
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

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '(11) 9 9145-5137',
      description: 'Fale conosco pelo WhatsApp - Resposta rápida!',
      link: 'https://wa.me/5511991455137?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido',
      color: 'text-green-500'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 9 9145-5137',
      description: 'Ligue para fazer seu pedido ou tirar dúvidas',
      link: 'tel:+5511991455137',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'micheleccene@gmail.com',
      description: 'Envie-nos um e-mail com sua solicitação',
      link: 'mailto:micheleccene@gmail.com',
      color: 'text-purple-500'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      info: '@sabordoceubolosedoces_',
      description: 'Siga-nos no Instagram e veja nossos trabalhos',
      link: 'https://instagram.com/sabordoceubolosedoces_',
      color: 'text-pink-500'
    }
  ];

  return (
    <section ref={sectionRef} id="contato" className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-center">Entre em Contato</h2>
          <p className="section-subtitle text-center mx-auto">
            Estamos prontos para adoçar seus momentos especiais. Fale conosco!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4 mx-auto group-hover:bg-gray-100 transition-colors duration-200">
                <method.icon className={`h-8 w-8 ${method.color}`} />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{method.title}</h3>
              <p className="text-gray-600 font-medium mb-2">{method.info}</p>
              <p className="text-sm text-gray-500">{method.description}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <Send className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Faça seu Pedido Agora!</h3>
            <p className="text-gray-600">
              Clique no botão abaixo e faça seu pedido pelo WhatsApp. 
              Responderemos rapidamente com todas as informações!
            </p>
          </div>
          
          <div className="text-center">
            <a
              href="https://wa.me/5511991455137?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido.%20Podem%20me%20ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-pink-400 to-blue-400 rounded-lg shadow-lg hover:from-pink-500 hover:to-blue-500 transition-all duration-200 transform hover:scale-105"
            >
              <MessageCircle className="h-6 w-6 mr-2" />
              Fazer Pedido pelo WhatsApp
            </a>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>📱 Resposta em até 30 minutos durante o horário comercial</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SaborContact;
