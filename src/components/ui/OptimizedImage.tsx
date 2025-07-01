
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  loading = 'lazy',
  onLoad,
  onError 
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div className={`bg-pink-100 flex items-center justify-center ${className}`}>
        <div className="text-center text-pink-400">
          <div className="text-2xl mb-2">🍰</div>
          <p className="text-xs">Imagem não disponível</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-pink-50 animate-pulse flex items-center justify-center">
          <div className="text-pink-300 text-xl">🍰</div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default OptimizedImage;
