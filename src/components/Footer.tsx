
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-soft-gray py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div>
            <Link to="/" className="text-2xl font-playfair font-semibold text-charcoal">
              Serene Spaces
            </Link>
            <p className="mt-4 text-neutral-gray">
              Creating thoughtful, modern interiors that reflect your personal style and enhance your everyday living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-medium text-charcoal mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/projects" className="text-neutral-gray hover:text-charcoal transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-gray hover:text-charcoal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-gray hover:text-charcoal transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-gray hover:text-charcoal transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-playfair font-medium text-charcoal mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-neutral-gray mr-2 mt-0.5" />
                <span className="text-neutral-gray">
                  123 Design Street, Suite 101<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-neutral-gray mr-2" />
                <a href="tel:+12125551234" className="text-neutral-gray hover:text-charcoal transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-neutral-gray mr-2" />
                <a href="mailto:info@serenespaces.com" className="text-neutral-gray hover:text-charcoal transition-colors">
                  info@serenespaces.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-playfair font-medium text-charcoal mb-4">
              Newsletter
            </h3>
            <p className="text-neutral-gray mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email"
                className="bg-white border-neutral-gray focus:border-charcoal"
              />
              <Button size="icon" className="bg-charcoal hover:bg-neutral-gray transition-colors">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-gray/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-gray text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Serene Spaces. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-gray hover:text-charcoal transition-colors">
              Instagram
            </a>
            <a href="#" className="text-neutral-gray hover:text-charcoal transition-colors">
              Pinterest
            </a>
            <a href="#" className="text-neutral-gray hover:text-charcoal transition-colors">
              Houzz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
