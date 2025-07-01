
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const SaborGallery = () => {
  const images = [
    {
      src: '/lovable-uploads/dcf3e087-473b-47da-891b-2b6b02a8f681.png',
      alt: 'Sobremesas variadas em potes individuais',
      title: 'Sobremesas Personalizadas'
    },
    {
      src: '/lovable-uploads/7cce282b-9359-40c9-9f0f-3a6767ffefe1.png',
      alt: 'Doces e chocolates em embalagem especial',
      title: 'Doces Especiais'
    },
    {
      src: '/lovable-uploads/be74a860-c2bc-4f0d-8452-febe5f268a38.png',
      alt: 'Bolo de aniversário azul com balões',
      title: 'Bolos de Aniversário'
    },
    {
      src: '/lovable-uploads/18408830-c07e-4d52-8075-3660764e7b79.png',
      alt: 'Bolo com cobertura branca e frutas vermelhas',
      title: 'Bolos Artesanais'
    },
    {
      src: '/lovable-uploads/35ec5d79-a58a-4111-8dd0-2dc316174034.png',
      alt: 'Bolo de chocolate com morangos',
      title: 'Bolos de Chocolate'
    },
    {
      src: '/lovable-uploads/2873e589-51fc-4fb8-958f-a6b5e79ebad0.png',
      alt: 'Fatia de bolo com recheio cremoso',
      title: 'Recheios Especiais'
    },
    {
      src: '/lovable-uploads/4eb75efb-1cb7-44a4-a42e-49320cb1fbce.png',
      alt: 'Bombons de chocolate artesanais',
      title: 'Bombons Artesanais'
    },
    {
      src: '/lovable-uploads/d911bcd7-d04a-485f-a99b-1cf1375271e3.png',
      alt: 'Pudins caseiros',
      title: 'Pudins Caseiros'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload adjacent images
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Preload current, next and previous images
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    preloadImage(images[currentIndex].src);
    preloadImage(images[prevIndex].src);
    preloadImage(images[nextIndex].src);
  }, [currentIndex, images]);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-600 mb-4">
            Nossa Galeria
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça algumas das nossas deliciosas criações feitas com muito carinho
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main carousel container */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <OptimizedImage
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">
                    {images[currentIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg opacity-90 line-clamp-2">
                    {images[currentIndex].alt}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 text-white hover:scale-110 z-10"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 text-white hover:scale-110 z-10"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
          </div>

          {/* Thumbnail navigation */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2 overflow-x-auto pb-2 px-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-pink-400 shadow-lg scale-105 sm:scale-110' 
                    : 'border-transparent hover:border-pink-200'
                }`}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full"
                  loading={Math.abs(index - currentIndex) <= 2 ? 'eager' : 'lazy'}
                />
              </button>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-3 sm:mt-4 space-x-1.5 sm:space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pink-500 scale-125' 
                    : 'bg-pink-200 hover:bg-pink-300'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-8 sm:mt-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Gostou do que viu? Entre em contato conosco!
          </p>
          <button
            onClick={() => window.open('https://wa.me/5511991455137?text=Olá!%20Vi%20a%20galeria%20e%20gostaria%20de%20fazer%20um%20pedido.', '_blank')}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 border border-transparent rounded-full shadow-sm hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 transition-all duration-300 hover:scale-105"
          >
            Faça Seu Pedido
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SaborGallery;
