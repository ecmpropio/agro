
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl flex items-center">
            <Globe className="h-6 w-6 mr-2 text-food" />
            <span className="text-navy-dark">
              American <span className="text-food">Trading Foods</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/por-que-elegirnos">Por qué elegirnos</NavLink>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/certificaciones">Certificaciones</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>

        {/* Language Selector */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="opacity-80 hover:opacity-100 transition-opacity">ES</button>
          <span className="text-gray-300">|</span>
          <button className="opacity-60 hover:opacity-100 transition-opacity">EN</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg animate-fade-in">
          <div className="p-4 flex flex-col space-y-3">
            <MobileNavLink to="/nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</MobileNavLink>
            <MobileNavLink to="/por-que-elegirnos" onClick={() => setMobileMenuOpen(false)}>Por qué elegirnos</MobileNavLink>
            <MobileNavLink to="/productos" onClick={() => setMobileMenuOpen(false)}>Productos</MobileNavLink>
            <MobileNavLink to="/certificaciones" onClick={() => setMobileMenuOpen(false)}>Certificaciones</MobileNavLink>
            <MobileNavLink to="/contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</MobileNavLink>
            
            <div className="flex space-x-4 pt-2 border-t">
              <button className="font-medium">ES</button>
              <button className="opacity-60">EN</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className="nav-item font-medium text-sm hover:text-food transition-colors"
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className="py-2 font-medium text-sm hover:text-food transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
