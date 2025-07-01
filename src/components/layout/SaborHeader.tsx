import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const SaborHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoError = () => {
    setLogoError(true);
  };

  const menuItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#localizacao', label: 'Localização' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Menu principal">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0" aria-label="Sabor do Céu - Página inicial">
            {!logoError ? (
              <img
                src="/lovable-uploads/4b578483-b23a-4ae0-b5da-6d37bf6f05b4.png"
                alt="Sabor do Céu - Bolos e Doces"
                className="h-12 w-12 lg:h-16 lg:w-16"
                onError={handleLogoError}
              />
            ) : (
              <div className="h-12 w-12 lg:h-16 lg:w-16 bg-pink-200 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold text-sm lg:text-base">SC</span>
              </div>
            )}
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'text-base font-medium transition-colors duration-200 hover:text-pink-500',
                  isScrolled ? 'text-gray-800' : 'text-white'
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511991455137?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Fazer Pedido
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-pink-500 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-pink-500 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5511991455137?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 btn-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fazer Pedido
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default SaborHeader;
