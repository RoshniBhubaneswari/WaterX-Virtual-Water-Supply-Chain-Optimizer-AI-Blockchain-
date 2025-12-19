
import { Button } from '@/components/ui/button';
import { DropletIcon, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-water-50 to-background" 
        aria-hidden="true"
      />
      <div 
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-100 mix-blend-multiply blur-3xl opacity-70" 
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-eco-100 mix-blend-multiply blur-3xl opacity-70" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-water-600 to-primary rounded-2xl overflow-hidden shadow-lg animate-scale-in">
          <div className="p-12 md:p-16 relative">
            {/* Water icon background */}
            <div className="absolute right-0 bottom-0 opacity-10" aria-hidden="true">
              <DropletIcon className="w-64 h-64" />
            </div>

            <div className="relative z-10">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Make a Splash in Water Conservation?
                </h2>
                <p className="text-xl text-white/80 mb-10">
                  Join our community today and start trading water credits, 
                  tracking usage, and making a positive impact on the environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 text-base font-medium border-0"
                  >
                    Get Started Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white/10 text-base font-medium"
                  >
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom info bar */}
          <div className="bg-gradient-to-r from-primary/80 to-primary py-6 px-12 md:px-16 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/90 mb-4 md:mb-0">
              Join 12,000+ water conservation champions making a difference
            </p>
            <Button 
              variant="ghost" 
              className="text-white hover:text-white hover:bg-white/10"
            >
              Learn how it works
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
