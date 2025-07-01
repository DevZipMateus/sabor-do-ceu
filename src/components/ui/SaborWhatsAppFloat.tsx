
import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const SaborWhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(animationInterval);
    };
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/5511991455137?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20doces%20artesanais', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
        isAnimating ? 'animate-bounce' : ''
      )}
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />
      
      {/* Pulse animation */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-300"></span>
      </span>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Faça seu pedido!
        <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
      </div>
    </button>
  );
};

export default SaborWhatsAppFloat;
