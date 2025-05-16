
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    id: 1,
    quote: "Serene Spaces transformed our apartment beyond my expectations. They listened to our needs and preferences, and delivered a space that feels like us but better than we could have imagined.",
    name: "Sarah Johnson",
    location: "Manhattan, NY",
    project: "Urban Apartment"
  },
  {
    id: 2,
    quote: "Working with Serene Spaces was a dream. They brought fresh ideas to our home renovation while respecting our vision and budget. The result is a space that feels both sophisticated and comfortable.",
    name: "Michael & Laura Chen",
    location: "Boston, MA",
    project: "Brownstone Renovation"
  },
  {
    id: 3,
    quote: "I appreciated their attention to detail and thoughtful approach to design. They didn't just make my space look beautiful—they made it function better for my lifestyle.",
    name: "James Williams",
    location: "Brooklyn, NY",
    project: "Loft Conversion"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair text-charcoal mb-4">
            Client Experiences
          </h2>
          <p className="text-neutral-gray text-lg">
            Hear what our clients have to say about their design journey with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-soft-gray p-8 rounded-md">
              <p className="text-charcoal font-playfair italic mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <Separator className="my-4 bg-neutral-gray/30" />
              <div>
                <h4 className="text-charcoal font-medium">{testimonial.name}</h4>
                <p className="text-neutral-gray text-sm">{testimonial.location}</p>
                <p className="text-neutral-gray text-sm">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
