
import { Heart, Instagram, Phone, Mail } from 'lucide-react';

const SaborFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/6325941d-60a7-414f-86bb-7ebea6b4155c.png"
                alt="Sabor do Céu"
                className="h-12 w-12 mr-3"
              />
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Sabor do Céu
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Doces artesanais feitos com amor e carinho. Cada produto é preparado 
              especialmente para adoçar seus momentos mais especiais.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5511991455137"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a
                href="mailto:micheleccene@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="E-mail"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/sabordoceubolosedoces_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre' },
                { href: '#servicos', label: 'Serviços' },
                { href: '#planos', label: 'Planos' },
                { href: '#contato', label: 'Contato' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 Alzira Rocha da Silva, 370</p>
              <p>Parque Suburbano - São Paulo, SP</p>
              <p>📱 (11) 9 9145-5137</p>
              <p>✉️ micheleccene@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            © 2025 Sabor do Céu. Feito com <Heart className="h-4 w-4 text-red-500 mx-1" /> 
            e muito carinho.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SaborFooter;
