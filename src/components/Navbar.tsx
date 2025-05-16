
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-playfair font-semibold tracking-tight text-charcoal">
          Serene Spaces
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-charcoal hover:text-neutral-gray transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-charcoal hover:text-neutral-gray transition-colors">
            Projects
          </Link>
          <Link to="/services" className="text-charcoal hover:text-neutral-gray transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-charcoal hover:text-neutral-gray transition-colors">
            About
          </Link>
          <Button variant="outline" className="ml-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors">
            Contact Us
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? 
              <X className="h-6 w-6 text-charcoal" /> : 
              <Menu className="h-6 w-6 text-charcoal" />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full py-4 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-charcoal py-2 border-b border-soft-gray"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="text-charcoal py-2 border-b border-soft-gray"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/services" 
              className="text-charcoal py-2 border-b border-soft-gray"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-charcoal py-2 border-b border-soft-gray"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Button 
              variant="outline" 
              className="w-full justify-center border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
