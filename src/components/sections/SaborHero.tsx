import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SaborHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Criar cupcakes caindo
    const container = document.getElementById('cupcake-container');
    if (!container) return;

    const numeroDeCupcakes = 30;

    for (let i = 0; i < numeroDeCupcakes; i++) {
      const cupcake = document.createElement('div');
      cupcake.classList.add('falling-cupcake');
      cupcake.innerHTML = '🧁';

      // Propriedades aleatórias para cada cupcake
      cupcake.style.left = Math.random() * 100 + 'vw';
      cupcake.style.animationDuration = (Math.random() * 10 + 5) + 's';
      cupcake.style.animationDelay = Math.random() * 5 + 's';
      cupcake.style.fontSize = (Math.random() * 20 + 20) + 'px';

      container.appendChild(cupcake);
    }

    // Cleanup function para remover os cupcakes quando o componente for desmontado
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pink-200"
    >
      {/* Container para cupcakes caindo */}
      <div id="cupcake-container" className="absolute inset-0 pointer-events-none z-0"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat bg-center" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8bbd9' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="/lovable-uploads/38be95a2-a087-46f0-bdc2-bda900be6b9e.png"
            alt="Sabor do Céu - Logo"
            className="h-32 w-32 md:h-40 md:w-40 mx-auto mb-6"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Sabor do <span className="text-gradient">Céu</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Bolos e doces artesanais feitos com amor e carinho. 
          <br />
          <span className="text-pink-500 font-semibold">Cada bite é uma experiência celestial!</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://wa.me/5511991455137?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            🎂 Fazer Pedido
          </a>
          <a
            href="#sobre"
            className="btn-secondary text-lg px-8 py-4"
          >
            Conheça Nossa História
          </a>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex justify-center">
            <a href="#sobre" className="animate-bounce">
              <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center p-1">
                <div className="w-1 h-3 bg-pink-400 rounded-full animate-pulse"></div>
              </div>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-2">Role para baixo</p>
        </motion.div>
      </div>

      {/* Estilos CSS para cupcakes caindo */}
      <style jsx>{`
        .falling-cupcake {
          position: absolute;
          user-select: none;
          animation-name: cair;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes cair {
          0% {
            top: -10%;
            opacity: 1;
            transform: rotate(0deg);
          }
          100% {
            top: 110%;
            opacity: 1;
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default SaborHero;
