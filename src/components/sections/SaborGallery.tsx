import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';

const SaborGallery = () => {
  const images = [
    {
      src: '/lovable-uploads/dcf3e087-473b-47da-891b-2b6b02a8f681.png',
      alt: 'Bolos no pote em porções individuais',
      title: 'Bolos no Pote'
    },
    {
      src: '/lovable-uploads/7cce282b-9359-40c9-9f0f-3a6767ffefe1.png',
      alt: 'Trufas em embalagem especial',
      title: 'Trufas'
    },
    {
      src: '/lovable-uploads/be74a860-c2bc-4f0d-8452-febe5f268a38.png',
      alt: 'Bolo de aniversário azul com balões',
      title: 'Bolos de Aniversário'
    },
    {
      src: '/lovable-uploads/18408830-c07e-4d52-8075-3660764e7b79.png',
      alt: 'Bolo com cobertura branca e frutas vermelhas',
      title: 'Bolo'
    },
    {
      src: '/lovable-uploads/3b6de295-b52e-4be0-af47-5e3657406018.png',
      alt: 'Bolo de chocolate com morangos e granulado',
      title: 'Bolos de Chocolate'
    },
    {
      src: '/lovable-uploads/2873e589-51fc-4fb8-958f-a6b5e79ebad0.png',
      alt: 'Cones doces especiais',
      title: 'Cone Trufado'
    },
    {
      src: '/lovable-uploads/36449a98-da38-44e9-b687-225b483cfeb7.png',
      alt: 'Pães de mel cobertos com chocolate',
      title: 'Pão de Mel'
    },
    {
      src: '/lovable-uploads/a9064846-d5dd-481b-aaf7-fd61a73941e8.png',
      alt: 'Pudins caseiros com cartão especial',
      title: 'Pudins Caseiros'
    },
    {
      src: '/lovable-uploads/08187dc3-e4c6-4c4b-a32d-bb7b9215be2e.png',
      alt: 'Bolos no pote em diversos sabores',
      title: 'Bolos no Pote'
    },
    {
      src: '/lovable-uploads/95afc9e5-fcb4-4278-a744-cc30e87553d5.png',
      alt: 'Copos da felicidade com camadas especiais',
      title: 'Copos da Felicidade'
    },
    {
      src: '/lovable-uploads/ce100a78-f4ca-4b3c-9a3b-aa3378d83d36.png',
      alt: 'Bolos caseiros variados',
      title: 'Bolos Caseiros'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<number>>(new Set());

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

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

  const handleImageLoad = (index: number) => {
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const handleImageError = (index: number) => {
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
    console.error(`Failed to load image at index ${index}`);
  };

  const startImageLoad = (index: number) => {
    if (!loadedImages.has(index) && !loadingImages.has(index)) {
      setLoadingImages(prev => new Set(prev).add(index));
    }
  };

  // Preload current and adjacent images
  useEffect(() => {
    const preloadIndices = [
      currentIndex,
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    ];
    
    preloadIndices.forEach(index => startImageLoad(index));
  }, [currentIndex, images.length]);

  return (
    <section className="section-container bg-gradient-to-br from-pink-50 to-blue-50">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title text-pink-600">
          Nossa Galeria
        </h2>
        <p className="section-subtitle">
          Conheça algumas das nossas deliciosas criações feitas com muito carinho
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Main carousel container with fixed aspect ratio */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
          <AspectRatio ratio={16/9} className="bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Loading skeleton */}
                {loadingImages.has(currentIndex) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Skeleton className="w-full h-full" />
                  </div>
                )}
                
                {/* Main image */}
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${
                    loadingImages.has(currentIndex) ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => handleImageLoad(currentIndex)}
                  onError={() => handleImageError(currentIndex)}
                  loading="lazy"
                />
                
                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Content overlay - only show when image is loaded */}
                {loadedImages.has(currentIndex) && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-lg">
                      {images[currentIndex].title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg opacity-90 drop-shadow-md">
                      {images[currentIndex].alt}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </AspectRatio>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white hover:scale-110"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white hover:scale-110"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex 
                  ? 'border-pink-400 shadow-lg scale-110' 
                  : 'border-transparent hover:border-pink-200'
              }`}
            >
              <div className="relative w-full h-full">
                {loadingImages.has(index) && (
                  <Skeleton className="w-full h-full" />
                )}
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    loadingImages.has(index) ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageError(index)}
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-600 mb-6">
          Gostou do que viu? Entre em contato conosco!
        </p>
        <button
          onClick={() => window.open('https://wa.me/5521999999999?text=Olá!%20Vi%20a%20galeria%20e%20gostaria%20de%20fazer%20um%20pedido.', '_blank')}
          className="btn-primary text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
        >
          Faça Seu Pedido
        </button>
      </motion.div>
    </section>
  );
};

export default SaborGallery;
