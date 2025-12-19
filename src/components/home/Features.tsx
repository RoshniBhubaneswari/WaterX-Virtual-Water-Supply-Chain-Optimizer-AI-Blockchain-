
import { 
  DropletIcon, 
  LineChart, 
  Shield, 
  Coins, 
  Smartphone, 
  Globe, 
  Users 
} from 'lucide-react';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { cn } from '@/lib/utils';

const Features = () => {
  const features = [
    {
      icon: <DropletIcon className="h-8 w-8 text-water-500" />,
      title: "Water Conservation",
      description: "Save water and earn credits through our innovative tracking system.",
      color: "bg-water-50",
      borderColor: "border-water-200",
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Smart Analytics",
      description: "Gain insights from AI-powered analytics to optimize water usage.",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Shield className="h-8 w-8 text-eco-500" />,
      title: "Secure Compliance",
      description: "Stay compliant with water regulations and policies automatically.",
      color: "bg-eco-50",
      borderColor: "border-eco-200",
    },
    {
      icon: <Coins className="h-8 w-8 text-gold-500" />,
      title: "Credit Marketplace",
      description: "Trade water credits in a transparent and efficient marketplace.",
      color: "bg-gold-50",
      borderColor: "border-gold-200",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-500" />,
      title: "Mobile Integration",
      description: "Monitor and manage your water usage on-the-go with our mobile app.",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Globe className="h-8 w-8 text-teal-500" />,
      title: "Global Impact",
      description: "Be part of a global community committed to water sustainability.",
      color: "bg-teal-50",
      borderColor: "border-teal-200",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
        <div 
          className="absolute right-0 -top-32 w-[600px] h-[600px] bg-gradient-radial from-water-100/40 to-transparent opacity-70 rounded-full blur-3xl" 
          aria-hidden="true"
        />
        <div 
          className="absolute left-0 -bottom-32 w-[600px] h-[600px] bg-gradient-radial from-eco-100/40 to-transparent opacity-70 rounded-full blur-3xl" 
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Powerful Features for All Stakeholders
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in [animation-delay:0.1s]">
            Whether you're saving water, using water, or regulating water usage, 
            our platform provides the tools you need to make a difference.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard 
              key={feature.title}
              delay={0.2 + index * 0.1}
              className={cn(
                "flex flex-col items-start p-8",
                feature.color,
                "border",
                feature.borderColor
              )}
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </AnimatedCard>
          ))}
        </div>

        {/* Community feature highlight */}
        <div className="mt-20">
          <AnimatedCard 
            delay={0.8}
            className="bg-gradient-to-br from-water-500/10 to-eco-500/10 p-10 md:p-12 backdrop-blur-sm border-none"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-8 md:mb-0 md:mr-12">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Join Our Community of Water Conservation Champions
                </h3>
                <p className="text-lg text-muted-foreground mb-0">
                  Connect with like-minded individuals and organizations committed to 
                  sustainable water usage. Share insights, learn best practices, and 
                  collaborate to make a bigger impact together.
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
