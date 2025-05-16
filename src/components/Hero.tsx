
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="Elegant interior design"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-white leading-tight mb-6">
            Curating Spaces<br />That Inspire Living
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-lg">
            We create thoughtful interiors that balance aesthetic beauty with functional living, transforming your space into a reflection of your unique lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-charcoal hover:bg-neutral-gray hover:text-white transition-colors">
              Explore Our Work
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal transition-colors">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={scrollToProjects}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
