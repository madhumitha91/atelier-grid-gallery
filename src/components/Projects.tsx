
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Minimalist Loft',
    category: 'Apartment',
    location: 'Brooklyn, NY',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
  },
  {
    id: 2,
    title: 'Coastal Retreat',
    category: 'Residential',
    location: 'Hamptons, NY',
    image: 'https://images.unsplash.com/photo-1600607687126-8a3414349a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 3,
    title: 'Urban Studio',
    category: 'Apartment',
    location: 'Manhattan, NY',
    image: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 4,
    title: 'Modern Townhouse',
    category: 'Residential',
    location: 'Boston, MA',
    image: 'https://images.unsplash.com/photo-1599327286062-40b0a7f2b305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
  },
  {
    id: 5,
    title: 'Luxe Penthouse',
    category: 'Apartment',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 6,
    title: 'Suburban Sanctuary',
    category: 'Residential',
    location: 'Greenwich, CT',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 bg-soft-gray" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair text-charcoal mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-gray text-lg mb-8">
            Explore our portfolio of thoughtfully designed spaces that balance style, function, and the unique character of each client.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {['All', 'Residential', 'Apartment'].map((category) => (
              <Button 
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={filter === category 
                  ? "bg-charcoal text-white hover:bg-neutral-gray transition-colors" 
                  : "border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-md hover:shadow-lg transition-all duration-300 animate-fade-in"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-playfair text-white mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">{project.category}</span>
                  <span className="text-white/80 text-sm">{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-charcoal text-white hover:bg-neutral-gray transition-colors">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
