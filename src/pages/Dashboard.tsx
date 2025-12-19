
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { DropletIcon, LineChart, Award, CreditCard, ArrowUpRight, Droplets, Factory, FileBarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  const [userRole, setUserRole] = useState<'saver' | 'user' | 'regulator'>('saver');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Role selector */}
          <div className="mb-8 animate-fade-in">
            <Tabs 
              defaultValue="saver" 
              className="w-full max-w-md mx-auto" 
              onValueChange={(value) => setUserRole(value as 'saver' | 'user' | 'regulator')}
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="saver" className="text-sm">Water Saver</TabsTrigger>
                <TabsTrigger value="user" className="text-sm">Water User</TabsTrigger>
                <TabsTrigger value="regulator" className="text-sm">Regulator</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {/* Dashboard header */}
          <header className="mb-10 animate-fade-in [animation-delay:0.1s]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {userRole === 'saver' ? 'Water Saver Dashboard' : 
                   userRole === 'user' ? 'Water User Dashboard' : 
                   'Water Regulator Dashboard'}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {userRole === 'saver' ? 'Monitor your water saving impact and credits' : 
                   userRole === 'user' ? 'Track your water usage and credit purchases' : 
                   'Oversee water usage and compliance across your jurisdiction'}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button>
                  {userRole === 'saver' ? 'Sell Credits' : 
                   userRole === 'user' ? 'Buy Credits' : 
                   'Generate Report'}
                </Button>
              </div>
            </div>
          </header>
          
          {/* Stats overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <AnimatedCard 
              delay={0.2} 
              className={cn(
                "flex space-x-4 items-center",
                userRole === 'saver' ? "bg-eco-50 border-eco-200" : 
                userRole === 'user' ? "bg-water-50 border-water-200" : 
                "bg-blue-50 border-blue-200"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center",
                userRole === 'saver' ? "bg-eco-100 text-eco-600" : 
                userRole === 'user' ? "bg-water-100 text-water-600" : 
                "bg-blue-100 text-blue-600"
              )}>
                {userRole === 'saver' ? <Droplets className="h-6 w-6" /> : 
                 userRole === 'user' ? <Factory className="h-6 w-6" /> : 
                 <FileBarChart className="h-6 w-6" />}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {userRole === 'saver' ? 'Water Saved' : 
                   userRole === 'user' ? 'Water Usage' : 
                   'Users Monitored'}
                </p>
                <p className="text-2xl font-semibold">
                  {userRole === 'saver' ? '2,450 gal' : 
                   userRole === 'user' ? '3,780 gal' : 
                   '1,245'}
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard 
              delay={0.3} 
              className="flex space-x-4 items-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {userRole === 'saver' ? 'Credits Earned' : 
                   userRole === 'user' ? 'Credits Purchased' : 
                   'Credits Traded'}
                </p>
                <p className="text-2xl font-semibold">
                  {userRole === 'saver' ? '486' : 
                   userRole === 'user' ? '215' : 
                   '15,628'}
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard 
              delay={0.4} 
              className="flex space-x-4 items-center"
            >
              <div className="w-12 h-12 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {userRole === 'saver' ? 'Achievements' : 
                   userRole === 'user' ? 'Compliance Score' : 
                   'Policy Compliance'}
                </p>
                <p className="text-2xl font-semibold">
                  {userRole === 'saver' ? '8/12' : 
                   userRole === 'user' ? '92%' : 
                   '87%'}
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard 
              delay={0.5} 
              className="flex space-x-4 items-center"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                <LineChart className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {userRole === 'saver' ? 'Market Value' : 
                   userRole === 'user' ? 'Spending' : 
                   'Market Health'}
                </p>
                <p className="text-2xl font-semibold">
                  {userRole === 'saver' ? '$12,450' : 
                   userRole === 'user' ? '$5,280' : 
                   '94%'}
                </p>
              </div>
            </AnimatedCard>
          </div>
          
          {/* Main content area - specific to user role */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - usage chart */}
            <div className="lg:col-span-2">
              <AnimatedCard 
                delay={0.6} 
                className="h-full"
              >
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>
                    {userRole === 'saver' ? 'Water Saving Trends' : 
                     userRole === 'user' ? 'Usage Patterns' : 
                     'Regional Usage Comparison'}
                  </CardTitle>
                  <Button variant="outline" size="sm" className="gap-1">
                    View Details <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  {/* Chart placeholder - would be a real chart in production */}
                  <div className="rounded-lg bg-muted/20 border border-border w-full h-72 flex items-center justify-center p-6">
                    <div className="text-center text-muted-foreground space-y-4">
                      <LineChart className="w-12 h-12 mx-auto text-muted-foreground/50" />
                      <p>Interactive chart will appear here</p>
                    </div>
                  </div>
                  
                  {/* Summary stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 rounded-lg bg-muted/20">
                      <p className="text-sm text-muted-foreground mb-1">
                        {userRole === 'saver' ? 'Monthly Avg' : 
                         userRole === 'user' ? 'Peak Usage' : 
                         'Total Coverage'}
                      </p>
                      <p className="text-lg font-medium">
                        {userRole === 'saver' ? '625 gal' : 
                         userRole === 'user' ? '145 gal/day' : 
                         '95.3%'}
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/20">
                      <p className="text-sm text-muted-foreground mb-1">
                        {userRole === 'saver' ? 'YoY Change' : 
                         userRole === 'user' ? 'Efficiency' : 
                         'Non-compliance'}
                      </p>
                      <p className="text-lg font-medium">
                        {userRole === 'saver' ? '+18.5%' : 
                         userRole === 'user' ? '78.2%' : 
                         '4.8%'}
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/20">
                      <p className="text-sm text-muted-foreground mb-1">
                        {userRole === 'saver' ? 'Projection' : 
                         userRole === 'user' ? 'Target' : 
                         'Action Items'}
                      </p>
                      <p className="text-lg font-medium">
                        {userRole === 'saver' ? '720 gal' : 
                         userRole === 'user' ? '3,500 gal' : 
                         '12'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>
            
            {/* Right column - additional info */}
            <div>
              <AnimatedCard 
                delay={0.7} 
                className="mb-8"
              >
                <CardHeader>
                  <CardTitle>
                    {userRole === 'saver' ? 'Your Credits' : 
                     userRole === 'user' ? 'Credit Needs' : 
                     'Market Insights'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-muted/20 border border-border p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium">
                        {userRole === 'saver' ? 'Available to Sell' : 
                         userRole === 'user' ? 'Required Credits' : 
                         'Market Liquidity'}
                      </span>
                      <span className="text-xl font-semibold">
                        {userRole === 'saver' ? '486' : 
                         userRole === 'user' ? '320' : 
                         '92%'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium">
                        {userRole === 'saver' ? 'Market Value' : 
                         userRole === 'user' ? 'Current Holdings' : 
                         'Price Volatility'}
                      </span>
                      <span className="text-xl font-semibold">
                        {userRole === 'saver' ? '$12,450' : 
                         userRole === 'user' ? '215' : 
                         'Low'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        {userRole === 'saver' ? 'Pending Trades' : 
                         userRole === 'user' ? 'Deficit' : 
                         'Active Traders'}
                      </span>
                      <span className="text-xl font-semibold">
                        {userRole === 'saver' ? '2' : 
                         userRole === 'user' ? '105' : 
                         '1,245'}
                      </span>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    {userRole === 'saver' ? 'Go to Marketplace' : 
                     userRole === 'user' ? 'Purchase Credits' : 
                     'View Full Analytics'}
                  </Button>
                </CardContent>
              </AnimatedCard>
              
              <AnimatedCard 
                delay={0.8} 
                className={cn(
                  userRole === 'saver' ? "bg-gradient-to-br from-eco-50 to-eco-100 border-eco-200" : 
                  userRole === 'user' ? "bg-gradient-to-br from-water-50 to-water-100 border-water-200" : 
                  "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
                )}
              >
                <CardHeader>
                  <CardTitle>
                    {userRole === 'saver' ? 'Water Saving Tips' : 
                     userRole === 'user' ? 'Optimization Insights' : 
                     'Policy Updates'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userRole === 'saver' ? (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="bg-eco-200 rounded-full p-1 mt-0.5">
                          <DropletIcon className="h-4 w-4 text-eco-700" />
                        </div>
                        <p className="text-sm">Installing rain barrels could increase your credits by 15% monthly.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-eco-200 rounded-full p-1 mt-0.5">
                          <DropletIcon className="h-4 w-4 text-eco-700" />
                        </div>
                        <p className="text-sm">Your irrigation system has a potential inefficiency. Schedule a check-up.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-eco-200 rounded-full p-1 mt-0.5">
                          <DropletIcon className="h-4 w-4 text-eco-700" />
                        </div>
                        <p className="text-sm">Smart soil sensors could help optimize watering schedules.</p>
                      </div>
                    </>
                  ) : userRole === 'user' ? (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="bg-water-200 rounded-full p-1 mt-0.5">
                          <DropletIcon className="h-4 w-4 text-water-700" />
                        </div>
                        <p className="text-sm">Your production line #3 shows 22% higher water usage than industry average.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-water-200 rounded-full p-1 mt-0.5">
                          <DropletIcon className="h-4 w-4 text-water-700" />
                        </div>
                        <p className="text-sm">Implementing greywater recycling could save 320 gallons daily.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-water-200 rounded-full p-1 mt-0.5">
                          <DropletIcon className="h-4 w-4 text-water-700" />
                        </div>
                        <p className="text-sm">Credit prices are predicted to rise 8% next quarter. Consider advance purchases.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-200 rounded-full p-1 mt-0.5">
                          <DropletIcon className="h-4 w-4 text-blue-700" />
                        </div>
                        <p className="text-sm">New industrial compliance standards coming into effect on August 1st.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-200 rounded-full p-1 mt-0.5">
                          <DropletIcon className="h-4 w-4 text-blue-700" />
                        </div>
                        <p className="text-sm">Agricultural sector shows 12% improvement in water efficiency year-over-year.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-200 rounded-full p-1 mt-0.5">
                          <DropletIcon className="h-4 w-4 text-blue-700" />
                        </div>
                        <p className="text-sm">3 facilities require immediate compliance review based on latest data.</p>
                      </div>
                    </>
                  )}
                  
                  <Button variant="outline" className="w-full mt-4">
                    {userRole === 'saver' ? 'More Tips' : 
                     userRole === 'user' ? 'View All Insights' : 
                     'All Policy Updates'}
                  </Button>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
