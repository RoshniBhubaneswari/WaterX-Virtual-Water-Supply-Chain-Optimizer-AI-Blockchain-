
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { 
  BarChart, 
  PieChart, 
  LineChart, 
  Download, 
  Calendar, 
  Filter, 
  ArrowUpRight, 
  RefreshCw, 
  BarChart3, 
  PieChart as PieChartIcon,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

const Analytics = () => {
  const [dateRange, setDateRange] = useState('30d');
  const [chartType, setChartType] = useState('usage');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Analytics header */}
          <header className="mb-10 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Water Analytics</h1>
                <p className="text-muted-foreground text-lg">
                  Track, analyze, and optimize your water usage patterns
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>
              </div>
            </div>
          </header>
          
          {/* Time period selector */}
          <div className="mb-8 animate-fade-in [animation-delay:0.1s]">
            <Tabs 
              defaultValue="30d" 
              className="w-full max-w-md mx-auto"
              onValueChange={setDateRange}
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="7d">7 Days</TabsTrigger>
                <TabsTrigger value="30d">30 Days</TabsTrigger>
                <TabsTrigger value="90d">90 Days</TabsTrigger>
                <TabsTrigger value="1y">1 Year</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {/* Summary cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <AnimatedCard delay={0.2} className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-water-100 text-water-600">
                <BarChart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Water Usage</p>
                <p className="text-2xl font-semibold">3,780 gal</p>
                <p className="text-sm text-destructive flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.2% vs. prev. period
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3} className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-eco-100 text-eco-600">
                <LineChart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Efficiency Score</p>
                <p className="text-2xl font-semibold">78.2%</p>
                <p className="text-sm text-eco-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +3.4% vs. prev. period
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.4} className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <PieChart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Peak Usage Time</p>
                <p className="text-2xl font-semibold">2-4 PM</p>
                <p className="text-sm text-muted-foreground">Weekdays</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.5} className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Next Reading Due</p>
                <p className="text-2xl font-semibold">Nov 15</p>
                <p className="text-sm text-muted-foreground">In 8 days</p>
              </div>
            </AnimatedCard>
          </div>
          
          {/* Main analytics section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Primary chart */}
            <div className="lg:col-span-2">
              <AnimatedCard delay={0.6} className="h-full">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle>Water Usage Analysis</CardTitle>
                  <div className="flex items-center gap-2">
                    <Select
                      value={chartType}
                      onValueChange={setChartType}
                    >
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Chart type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usage">Usage Over Time</SelectItem>
                        <SelectItem value="comparison">YoY Comparison</SelectItem>
                        <SelectItem value="hourly">Hourly Breakdown</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="ghost" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Chart placeholder */}
                  <div className="h-96 bg-muted/20 border border-border rounded-lg flex items-center justify-center">
                    {chartType === 'usage' ? (
                      <div className="text-center">
                        <LineChart className="h-12 w-12 text-muted-foreground/30 mx-auto mb-2" />
                        <p className="text-muted-foreground">Usage Over Time chart will appear here</p>
                      </div>
                    ) : chartType === 'comparison' ? (
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 text-muted-foreground/30 mx-auto mb-2" />
                        <p className="text-muted-foreground">YoY Comparison chart will appear here</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <PieChartIcon className="h-12 w-12 text-muted-foreground/30 mx-auto mb-2" />
                        <p className="text-muted-foreground">Hourly Breakdown chart will appear here</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Legend/explanation */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-3 rounded-lg bg-muted/20 flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-water-500"></div>
                      <span className="text-sm">Current Period</span>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/20 flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-water-300"></div>
                      <span className="text-sm">Previous Period</span>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/20 flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-eco-500"></div>
                      <span className="text-sm">Efficiency Target</span>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>
            
            {/* Side analytics */}
            <div className="space-y-8">
              {/* Breakdown by source */}
              <AnimatedCard delay={0.7}>
                <CardHeader className="pb-2">
                  <CardTitle>Usage Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  {/* Chart placeholder */}
                  <div className="h-48 bg-muted/20 border border-border rounded-lg flex items-center justify-center mb-4">
                    <PieChartIcon className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                  
                  {/* Legend */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-water-500"></div>
                        <span className="text-sm">Production</span>
                      </div>
                      <span className="font-medium">42%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Irrigation</span>
                      </div>
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Facilities</span>
                      </div>
                      <span className="font-medium">18%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                        <span className="text-sm">Other</span>
                      </div>
                      <span className="font-medium">12%</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 text-sm"
                    size="sm"
                  >
                    Detailed Report
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </AnimatedCard>
              
              {/* Insights and recommendations */}
              <AnimatedCard 
                delay={0.8} 
                className="bg-gradient-to-br from-water-50 to-water-100 border-water-200"
              >
                <CardHeader className="pb-2">
                  <CardTitle>AI Insights</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="space-y-4">
                    <div className="p-3 bg-white/70 backdrop-blur-sm rounded-lg shadow-subtle">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-eco-600" />
                        <p className="font-medium text-sm">Anomaly Detected</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Unusual spike in water usage detected on Tuesdays between 2-4 PM.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-white/70 backdrop-blur-sm rounded-lg shadow-subtle">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingDown className="h-4 w-4 text-water-600" />
                        <p className="font-medium text-sm">Optimization Opportunity</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Cooling system running longer than needed. Potential 15% savings available.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-white/70 backdrop-blur-sm rounded-lg shadow-subtle">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <p className="font-medium text-sm">Forecast</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Based on current trends, you may exceed your allocation by 12% next month.
                      </p>
                    </div>
                    
                    <Button className="w-full">
                      View All Insights
                    </Button>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
          
          {/* Historical comparisons */}
          <div className="mt-10">
            <AnimatedCard delay={0.9}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Historical Comparison</CardTitle>
                <div className="flex items-center gap-2">
                  <Select defaultValue="monthly">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                {/* Comparison table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 text-sm font-medium text-muted-foreground">Period</th>
                        <th className="text-right p-3 text-sm font-medium text-muted-foreground">Usage (gal)</th>
                        <th className="text-right p-3 text-sm font-medium text-muted-foreground">Change</th>
                        <th className="text-right p-3 text-sm font-medium text-muted-foreground">Efficiency</th>
                        <th className="text-right p-3 text-sm font-medium text-muted-foreground">Credits Req.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border bg-muted/10">
                        <td className="p-3 text-sm font-medium">October 2023</td>
                        <td className="p-3 text-sm text-right">3,780</td>
                        <td className="p-3 text-sm text-right text-destructive">+8.2%</td>
                        <td className="p-3 text-sm text-right">78.2%</td>
                        <td className="p-3 text-sm text-right">105</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-sm font-medium">September 2023</td>
                        <td className="p-3 text-sm text-right">3,495</td>
                        <td className="p-3 text-sm text-right text-eco-600">-4.3%</td>
                        <td className="p-3 text-sm text-right">74.8%</td>
                        <td className="p-3 text-sm text-right">98</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-sm font-medium">August 2023</td>
                        <td className="p-3 text-sm text-right">3,652</td>
                        <td className="p-3 text-sm text-right text-destructive">+2.1%</td>
                        <td className="p-3 text-sm text-right">73.5%</td>
                        <td className="p-3 text-sm text-right">102</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-sm font-medium">July 2023</td>
                        <td className="p-3 text-sm text-right">3,576</td>
                        <td className="p-3 text-sm text-right text-eco-600">-1.8%</td>
                        <td className="p-3 text-sm text-right">72.9%</td>
                        <td className="p-3 text-sm text-right">100</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-sm font-medium">June 2023</td>
                        <td className="p-3 text-sm text-right">3,642</td>
                        <td className="p-3 text-sm text-right text-destructive">+5.6%</td>
                        <td className="p-3 text-sm text-right">71.2%</td>
                        <td className="p-3 text-sm text-right">110</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Analytics;
