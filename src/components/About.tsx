
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="Interior designer working" 
              className="rounded-md w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-soft-gray p-6 rounded-md max-w-xs hidden md:block">
              <p className="text-charcoal font-playfair italic text-lg">
                "We believe that thoughtful design should enhance your everyday experience at home."
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair text-charcoal mb-6">
              About Our Studio
            </h2>
            <p className="text-neutral-gray mb-6">
              Serene Spaces is a boutique interior design firm specializing in residential and apartment projects. Founded in 2015, our studio takes a client-centered approach to creating spaces that are both beautiful and functional.
            </p>
            <p className="text-neutral-gray mb-6">
              We believe in the transformative power of thoughtful design, creating environments that not only reflect your personal style but also enhance your everyday living experience. Our designs are characterized by clean lines, textural interest, and a sophisticated neutral palette that feels both contemporary and timeless.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-playfair text-charcoal mb-2">Our Approach</h3>
                <p className="text-neutral-gray">
                  We take a highly collaborative approach, working closely with our clients to understand their needs, preferences, and lifestyles before developing design concepts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-playfair text-charcoal mb-2">Our Values</h3>
                <p className="text-neutral-gray">
                  Quality, integrity, and attention to detail are at the core of everything we do, from concept development to final installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
