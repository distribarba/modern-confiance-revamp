
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isFixed?: boolean;
}

const Navbar = ({ isFixed = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para criar links que redirecionam para seções específicas na página inicial
  const getNavLink = (hash: string, label: string) => {
    const isHomePage = location.pathname === '/';
    const linkPath = isHomePage ? `#${hash}` : `/#${hash}`;
    
    return (
      <a 
        href={linkPath} 
        className="text-confiance-navy hover:text-confiance-green font-medium transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {label}
      </a>
    );
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isFixed || scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/80ffe772-5484-4688-9345-791645d8301a.png" 
                alt="Confiance Serviços Especializados" 
                className="h-12 md:h-14"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {getNavLink('inicio', 'Início')}
            {getNavLink('servicos', 'Serviços')}
            {getNavLink('sobre', 'Quem Somos')}
            {getNavLink('clientes', 'Clientes')}
            <a href="/#contato" className="button-primary">Fale Conosco</a>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 animate-fadeIn">
          {getNavLink('inicio', 'Início')}
          {getNavLink('servicos', 'Serviços')}
          {getNavLink('sobre', 'Quem Somos')}
          {getNavLink('clientes', 'Clientes')}
          <a href="/#contato" onClick={() => setIsOpen(false)} className="button-primary text-center">Fale Conosco</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
