import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SaborHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLogoError = () => {
    setLogoError(true);
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-blue-100 px-4"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat bg-center" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8bbd9' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          {!logoError ? (
            <img
              src="/lovable-uploads/4b578483-b23a-4ae0-b5da-6d37bf6f05b4.png"
              alt="Sabor do Céu - Logo"
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 mx-auto mb-4 sm:mb-6 object-contain"
              onError={handleLogoError}
            />
          ) : (
            <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 mx-auto mb-4 sm:mb-6 bg-pink-200 rounded-full flex items-center justify-center">
              <span className="text-pink-600 font-bold text-lg sm:text-xl md:text-2xl">SC</span>
            </div>
          )}
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Sabor do <span className="text-gradient">Céu</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Bolos e doces artesanais feitos com amor e carinho. 
          <br className="hidden sm:block" />
          <span className="text-pink-500 font-semibold">Cada bite é uma experiência celestial!</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://wa.me/5511991455137?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 border border-transparent rounded-lg shadow-sm hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 transition-all duration-300 hover:scale-105"
          >
            🎂 Fazer Pedido
          </a>
          <a
            href="#sobre"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-pink-600 bg-white border border-pink-300 rounded-lg shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 transition-all duration-300 hover:scale-105"
          >
            Conheça Nossa História
          </a>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex justify-center">
            <a href="#sobre" className="animate-bounce">
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-pink-400 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 sm:h-3 bg-pink-400 rounded-full animate-pulse"></div>
              </div>
            </a>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">Role para baixo</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SaborHero;
