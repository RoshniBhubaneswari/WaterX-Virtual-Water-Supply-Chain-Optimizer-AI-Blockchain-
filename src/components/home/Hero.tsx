
import { Button } from '@/components/ui/button';
import { AnimatedCard } from '@/components/ui/AnimatedCard';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 bg-gradient-mesh opacity-20 animate-pulse-slow -z-10" 
        aria-hidden="true"
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 w-40 h-40 rounded-full bg-water-400/20 animate-float [animation-duration:13s] blur-xl"/>
        <div className="absolute top-2/3 right-1/4 w-60 h-60 rounded-full bg-eco-400/20 animate-float [animation-duration:17s] [animation-delay:1s] blur-xl"/>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-gold-300/20 animate-float [animation-duration:15s] [animation-delay:2s] blur-xl"/>
      </div>
      
      {/* Content container */}
      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Feature badge */}
          <div className="inline-flex items-center rounded-full border border-border bg-background/70 backdrop-blur px-4 py-1.5 text-sm font-medium text-foreground mb-6 animate-fade-in">
            <span className="block w-2 h-2 rounded-full bg-eco-500 mr-2"/>
            Introducing the water credit marketplace
          </div>
          
          {/* Hero title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-water-600 via-primary to-water-700 mb-6 animate-fade-in [animation-delay:0.1s]">
            The Future of Water Conservation is Here
          </h1>
          
          {/* Hero subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 animate-fade-in [animation-delay:0.2s]">
            Connect water savers with users in a revolutionary marketplace. 
            Trade water credits, monitor usage, and contribute to a sustainable future.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in [animation-delay:0.3s]">
            <Button size="lg" className="text-base font-medium">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-base font-medium">
              Learn More
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedCard delay={0.4} className="text-left">
              <div className="w-12 h-12 rounded-full bg-water-100 flex items-center justify-center mb-4">
                <span className="text-water-600 text-2xl font-semibold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Water Trading</h3>
              <p className="text-muted-foreground">
                Buy and sell water credits in a secure, transparent marketplace powered by blockchain.
              </p>
            </AnimatedCard>
            
            <AnimatedCard delay={0.5} className="text-left">
              <div className="w-12 h-12 rounded-full bg-eco-100 flex items-center justify-center mb-4">
                <span className="text-eco-600 text-2xl font-semibold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
              <p className="text-muted-foreground">
                Monitor water usage with advanced IoT integration and AI-powered insights.
              </p>
            </AnimatedCard>
            
            <AnimatedCard delay={0.6} className="text-left">
              <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                <span className="text-gold-600 text-2xl font-semibold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact Tracking</h3>
              <p className="text-muted-foreground">
                Visualize your contribution to water conservation and environmental sustainability.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
