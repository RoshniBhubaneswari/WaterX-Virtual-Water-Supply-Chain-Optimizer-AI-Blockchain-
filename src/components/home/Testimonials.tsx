
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AquaEco has revolutionized how we manage water usage on our farm. We've saved 30% on water costs and earned credits that offset our expenses.",
      name: "Michael Chen",
      role: "Sustainable Farmer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      quote: "As a municipal water regulator, the analytics tools have been invaluable. We can now monitor usage patterns in real-time and make data-driven policy decisions.",
      name: "Sarah Johnson",
      role: "Water Policy Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      quote: "Our manufacturing plant needed to reduce water consumption to meet new regulations. Through AquaEco's marketplace, we purchased credits from water savers while implementing our own conservation measures.",
      name: "David Rodriguez",
      role: "Industrial Sustainability Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80"
    },
  ];

  return (
    <section className="py-24 bg-water-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div 
        className="absolute left-0 top-0 w-full h-32 bg-gradient-to-b from-background to-transparent" 
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-water-100 blur-3xl opacity-70" 
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-eco-100 blur-3xl opacity-60" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Trusted by Water Stewards Everywhere
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in [animation-delay:0.1s]">
            Hear from the people making a difference with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={index}
              delay={0.2 + index * 0.1}
              className="flex flex-col h-full p-8"
            >
              <div className="mb-6">
                <Quote className="h-10 w-10 text-water-400" />
              </div>
              <p className="text-lg mb-8 flex-1">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-white rounded-xl shadow-subtle overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="p-10 text-center animate-fade-in [animation-delay:0.4s]">
              <div className="text-5xl font-bold text-water-600 mb-2">2.8B</div>
              <p className="text-lg text-muted-foreground">Gallons of water saved</p>
            </div>
            <div className="p-10 text-center animate-fade-in [animation-delay:0.5s]">
              <div className="text-5xl font-bold text-eco-600 mb-2">12K+</div>
              <p className="text-lg text-muted-foreground">Active users</p>
            </div>
            <div className="p-10 text-center animate-fade-in [animation-delay:0.6s]">
              <div className="text-5xl font-bold text-gold-500 mb-2">$4.2M</div>
              <p className="text-lg text-muted-foreground">Credits traded</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
