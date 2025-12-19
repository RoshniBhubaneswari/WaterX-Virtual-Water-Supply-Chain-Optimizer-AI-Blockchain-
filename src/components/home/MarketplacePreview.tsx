
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, TrendingUp, TrendingDown, BarChart3, CreditCard } from 'lucide-react';

const MarketplacePreview = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('day');
  
  // Mock data for marketplace
  const mockCredits = [
    { 
      id: 1, 
      name: 'Premium Water Credits',
      price: 28.45, 
      change: 3.2, 
      volume: '12.5K',
      trend: 'up',
    },
    { 
      id: 2, 
      name: 'Standard Water Credits',
      price: 19.78, 
      change: -1.5, 
      volume: '8.3K',
      trend: 'down',
    },
    { 
      id: 3, 
      name: 'Agricultural Credits',
      price: 22.36, 
      change: 2.7, 
      volume: '5.2K',
      trend: 'up',
    },
    { 
      id: 4, 
      name: 'Industrial Credits',
      price: 34.12, 
      change: 5.4, 
      volume: '3.7K',
      trend: 'up',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-water-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-gradient-radial from-water-300/10 to-transparent opacity-60 blur-3xl -z-10" aria-hidden="true"/>

      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Water Credit Marketplace
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in [animation-delay:0.1s]">
            Trade water credits in a transparent, secure marketplace. Connect water savers 
            with water users to create a sustainable ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Market overview */}
          <div className="lg:col-span-3">
            <AnimatedCard 
              delay={0.2}
              className="p-8 h-full"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">Market Overview</h3>
                  <Tabs defaultValue="day" className="w-[300px]">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="day" onClick={() => setSelectedTimeframe('day')}>Day</TabsTrigger>
                      <TabsTrigger value="week" onClick={() => setSelectedTimeframe('week')}>Week</TabsTrigger>
                      <TabsTrigger value="month" onClick={() => setSelectedTimeframe('month')}>Month</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                {/* Chart placeholder */}
                <div className="flex-1 bg-gradient-to-r from-water-100 to-water-50 rounded-lg p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 400 150" className="w-full h-full opacity-50">
                      <path
                        d="M0,75 C50,30 100,120 150,80 C200,40 250,90 300,60 C350,30 400,70 400,75"
                        fill="none"
                        stroke="#0ea5e9"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0,75 C50,30 100,120 150,80 C200,40 250,90 300,60 C350,30 400,70 400,75"
                        fill="none"
                        stroke="#0ea5e9"
                        strokeWidth="1"
                        strokeDasharray="1,5"
                        strokeLinecap="round"
                        className="opacity-50"
                      />
                      <circle cx="100" cy="120" r="4" fill="#0ea5e9" />
                      <circle cx="150" cy="80" r="4" fill="#0ea5e9" />
                      <circle cx="250" cy="90" r="4" fill="#0ea5e9" />
                      <circle cx="300" cy="60" r="4" fill="#0ea5e9" />
                    </svg>
                  </div>
                  <BarChart3 className="w-16 h-16 text-water-500 opacity-20 absolute" />
                  <div className="text-center text-water-800 z-10 font-medium">
                    Interactive chart will appear here
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Market Volume</p>
                    <p className="text-2xl font-semibold">29.8K Credits</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Average Price</p>
                    <p className="text-2xl font-semibold">$24.57</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Traders</p>
                    <p className="text-2xl font-semibold">1,245</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
          
          {/* Credit listings */}
          <div className="lg:col-span-2">
            <AnimatedCard 
              delay={0.3}
              className="h-full p-8"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">Credits</h3>
                  <Button variant="outline" size="sm" className="gap-1">
                    View All <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4 flex-1">
                  {mockCredits.map((credit, index) => (
                    <div 
                      key={credit.id}
                      className="p-4 rounded-lg border border-border bg-background/50 flex justify-between items-center transition-all duration-300 hover:shadow-subtle hover:bg-background"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-water-100 flex items-center justify-center mr-3">
                          <CreditCard className="h-5 w-5 text-water-600" />
                        </div>
                        <div>
                          <p className="font-medium">{credit.name}</p>
                          <p className="text-sm text-muted-foreground">Vol: {credit.volume}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${credit.price}</div>
                        <div className={`text-sm flex items-center ${credit.trend === 'up' ? 'text-eco-600' : 'text-destructive'}`}>
                          {credit.trend === 'up' ? (
                            <TrendingUp className="h-3 w-3 mr-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 mr-1" />
                          )}
                          {credit.change > 0 ? '+' : ''}{credit.change}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button className="w-full">Start Trading</Button>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;
