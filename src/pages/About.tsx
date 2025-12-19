
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { AnimatedCard } from '@/components/ui/AnimatedCard';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Our Mission</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering communities to preserve our planet's most precious resource through innovative marketplace solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <AnimatedCard 
              className="p-8 md:p-10"
              variant="glass"
              animation="fade-in"
              delay={0.2}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-medium mb-4">Water Crisis &amp; Our Response</h2>
              <p className="text-muted-foreground mb-4">
                The global water crisis affects billions of people worldwide, with water scarcity impacting agriculture, 
                health, and economic development. At AquaEco, we believe that market-based solutions can drive meaningful 
                conservation efforts when properly aligned with sustainability goals.
              </p>
              <p className="text-muted-foreground">
                Our water credit marketplace creates financial incentives for water conservation while ensuring that 
                water resources are allocated efficiently and equitably.
              </p>
            </AnimatedCard>
            
            <div className="rounded-xl overflow-hidden shadow-subtle animate-fade-in [animation-delay:0.3s]">
              <img 
                src="https://cdn.discordapp.com/attachments/1258144464677900288/1352353556816199730/vecteezy_world-earth-day-concept-3d-render-the-eco-friendly-design_24495803.jpg?ex=67ddb4e5&is=67dc6365&hm=664e6e62903731c77796808cd3cc66fa35fda427a0aefbdd41a0f3dad814925e&" 
                alt="Water conservation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="bg-muted py-16 mb-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center animate-fade-in">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Sustainability",
                  description: "Ensuring water resources are preserved for future generations through responsible usage and conservation incentives.",
                  color: "bg-primary/10 border-primary/30",
                  delay: 0.1
                },
                {
                  title: "Transparency",
                  description: "Utilizing blockchain technology to provide verifiable records of all water credits and transactions.",
                  color: "bg-secondary/10 border-secondary/30",
                  delay: 0.2
                },
                {
                  title: "Innovation",
                  description: "Leveraging cutting-edge technology to solve complex water management challenges and create scalable solutions.",
                  color: "bg-accent/10 border-accent/30",
                  delay: 0.3
                }
              ].map((value, index) => (
                <AnimatedCard 
                  key={value.title}
                  className={`p-6 border ${value.color}`}
                  variant="outline"
                  animation="fade-in"
                  delay={value.delay}
                >
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="container mx-auto px-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center animate-fade-in">Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Subhojit Ram",
                role: "2nd year student",
                bio: "@SRM IST TRICHY",
                image: "https://cdn.discordapp.com/attachments/1258144464677900288/1352350889184071782/WhatsApp_Image_2025-03-21_at_00.04.39_cb57d3bf.jpg?ex=67ddb269&is=67dc60e9&hm=4b7044661f87f6766e02ceafc39fe57f58c7c87c34e022512627bd0cb8b3c76b&",
                delay: 0.1
              },
              {
                name: "Roshni",
                role: "2nd year student",
                bio: "@SRM IST TRICHY",
                image: "https://cdn.discordapp.com/attachments/1258144464677900288/1352351131409317919/WhatsApp_Image_2025-03-21_at_00.04.40_103eee94.jpg?ex=67ddb2a3&is=67dc6123&hm=d949049d847914f948f061cbfa70c5d5ef0d450c12ec9766fc2172c9d4ea7aba&",
                delay: 0.2
              },
              {
                name: "Subhojit Ram",
                role: "2nd year student",
                bio: "@SRM IST TRICHY",
                image: "https://cdn.discordapp.com/attachments/1258144464677900288/1352351192591634543/WhatsApp_Image_2025-03-21_at_00.08.35_23af8102.jpg?ex=67ddb2b1&is=67dc6131&hm=b02c8379f70f84ac8d9fca36e222c11ada8e40801a37f3e8f61092020950334f&",
                delay: 0.4
              },
              {
                name: "Roshni",
                role: "2nd year student",
                bio: "@SRM IST TRICHY",
                image: "https://cdn.discordapp.com/attachments/1258144464677900288/1352351164238266431/WhatsApp_Image_2025-03-21_at_00.08.31_9beb76bb.jpg?ex=67ddb2ab&is=67dc612b&hm=c97855130306e87273acec4a320fa078121c804c3974a13e31d11524f420118e&",
                delay: 0.3
              }
              
            ].map((member, index) => (
              <AnimatedCard 
                key={member.name}
                className="overflow-hidden"
                variant="glass"
                animation="fade-in"
                delay={member.delay}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>
        
        {/* Partners & Investors */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center animate-fade-in">Our Partners & Investors</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in [animation-delay:0.1s]">
              We're proud to work with organizations that share our commitment to water conservation and sustainability.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "EcoVentures", logo: "https://placehold.co/200x100/e2e8f0/64748b?text=EcoVentures", delay: 0.1 },
                { name: "Water Foundation", logo: "https://placehold.co/200x100/e2e8f0/64748b?text=Water+Foundation", delay: 0.2 },
                { name: "GreenTech Capital", logo: "https://placehold.co/200x100/e2e8f0/64748b?text=GreenTech", delay: 0.3 },
                { name: "Sustainable Future", logo: "https://placehold.co/200x100/e2e8f0/64748b?text=Sustainable+Future", delay: 0.4 },
              ].map((partner) => (
                <div 
                  key={partner.name} 
                  className="flex items-center justify-center p-6 bg-white rounded-lg shadow-subtle animate-fade-in hover:shadow-subtle-hover transition-shadow duration-300"
                  style={{ animationDelay: `${partner.delay}s` }}
                >
                  <img src={partner.logo} alt={partner.name} className="max-h-16" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
