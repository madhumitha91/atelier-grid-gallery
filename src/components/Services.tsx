
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Residential Design',
    description: 'Transform your home into a personalized sanctuary with our comprehensive residential design services tailored to your unique lifestyle and preferences.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    title: 'Apartment Styling',
    description: 'Maximize style and functionality in your apartment with our space-efficient design solutions that create an impression without compromising on comfort.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80',
  },
  {
    id: 3,
    title: 'Space Planning',
    description: 'Optimize your layout with our expert space planning, ensuring proper flow, functionality, and balance throughout your interior environment.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 4,
    title: 'Custom Furniture',
    description: 'Commission bespoke furniture pieces designed specifically for your space, ensuring a perfect fit and a truly one-of-a-kind interior.',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-charcoal mb-4">
            Our Design Services
          </h2>
          <p className="text-neutral-gray text-lg">
            From concept to completion, we offer comprehensive design services tailored to your unique needs and vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-md hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-playfair text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-gray mb-4">
                  {service.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-charcoal font-medium hover:text-neutral-gray transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
