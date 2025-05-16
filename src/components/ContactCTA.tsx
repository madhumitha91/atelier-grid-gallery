
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-charcoal text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Whether you're renovating, redecorating, or starting fresh, we'd love to discuss how we can help you create a space that reflects your personal style and enhances your everyday living.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-charcoal hover:bg-neutral-gray hover:text-white transition-colors">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal transition-colors">
              View Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
