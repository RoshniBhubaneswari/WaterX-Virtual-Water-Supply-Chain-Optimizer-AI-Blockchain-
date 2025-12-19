
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  CreditCard, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  Filter, 
  ArrowUpDown, 
  Info, 
  ShoppingCart, 
  Tag,
  BarChart3,
  RefreshCw,
  Droplets
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

// Type definitions for our marketplace items
type CreditType = 'standard' | 'premium' | 'agricultural' | 'industrial';
type CreditData = {
  id: number;
  name: string;
  type: CreditType;
  price: number;
  change: number;
  volume: string;
  available: number;
  seller: string;
  expiry: string;
  certification: string;
};

const Marketplace = () => {
  // State for marketplace filters and view
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price-low');
  
  // Mock data for the marketplace
  const mockCredits: CreditData[] = [
    {
      id: 1,
      name: 'Standard Water Credits',
      type: 'standard',
      price: 19.78,
      change: -1.5,
      volume: '8.3K',
      available: 2500,
      seller: 'EcoFarms LLC',
      expiry: 'Dec 2023',
      certification: 'WCF Verified',
    },
    {
      id: 2,
      name: 'Premium Water Credits',
      type: 'premium',
      price: 28.45,
      change: 3.2,
      volume: '12.5K',
      available: 1200,
      seller: 'Aqua Conserve Co.',
      expiry: 'Jan 2024',
      certification: 'Gold Standard',
    },
    {
      id: 3,
      name: 'Agricultural Credits',
      type: 'agricultural',
      price: 22.36,
      change: 2.7,
      volume: '5.2K',
      available: 3400,
      seller: 'Green Valley Farms',
      expiry: 'Nov 2023',
      certification: 'AgriCert',
    },
    {
      id: 4,
      name: 'Industrial Credits',
      type: 'industrial',
      price: 34.12,
      change: 5.4,
      volume: '3.7K',
      available: 950,
      seller: 'CleanTech Industries',
      expiry: 'Feb 2024',
      certification: 'ISO Water',
    },
    {
      id: 5,
      name: 'Standard Water Credits',
      type: 'standard',
      price: 20.15,
      change: 1.8,
      volume: '7.1K',
      available: 1800,
      seller: 'Pure Water Solutions',
      expiry: 'Dec 2023',
      certification: 'WCF Verified',
    },
    {
      id: 6,
      name: 'Premium Water Credits',
      type: 'premium',
      price: 29.50,
      change: -0.8,
      volume: '6.3K',
      available: 750,
      seller: 'BlueWave Inc.',
      expiry: 'Jan 2024',
      certification: 'Gold Standard',
    },
  ];
  
  // Filter credits based on search and type
  const filteredCredits = mockCredits.filter(credit => {
    const matchesSearch = credit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         credit.seller.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || credit.type === selectedType;
    return matchesSearch && matchesType;
  });
  
  // Sort credits based on selected sort method
  const sortedCredits = [...filteredCredits].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'volume':
        return parseInt(b.volume.replace('K', '000')) - parseInt(a.volume.replace('K', '000'));
      case 'available':
        return b.available - a.available;
      default:
        return 0;
    }
  });
  
  // Function to get color classes based on credit type
  const getTypeColor = (type: CreditType) => {
    switch (type) {
      case 'standard':
        return 'bg-water-100 text-water-700 border-water-200';
      case 'premium':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'agricultural':
        return 'bg-eco-100 text-eco-700 border-eco-200';
      case 'industrial':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Marketplace header */}
          <header className="mb-10 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Water Credit Marketplace</h1>
                <p className="text-muted-foreground text-lg">
                  Buy and sell water credits in a transparent, secure marketplace
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm" className="gap-1">
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>
                <Button size="sm" className="gap-1">
                  <ShoppingCart className="h-4 w-4" />
                  My Orders
                </Button>
              </div>
            </div>
          </header>
          
          {/* Market overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <AnimatedCard delay={0.1} className="col-span-full md:col-span-2 lg:col-span-3">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl">Market Overview</CardTitle>
                <Select defaultValue="day">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="year">Year</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent className="pt-2">
                {/* Chart placeholder */}
                <div className="h-64 bg-muted/20 rounded-lg border border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <BarChart3 className="w-10 h-10 mx-auto mb-2 text-muted-foreground/50" />
                    <p>Interactive market chart will appear here</p>
                  </div>
                </div>
                
                {/* Market stats */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Volume (24h)</p>
                      <TrendingUp className="h-4 w-4 text-eco-600" />
                    </div>
                    <p className="text-2xl font-semibold mt-1">35.4K</p>
                  </div>
                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Avg. Price</p>
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    </div>
                    <p className="text-2xl font-semibold mt-1">$24.57</p>
                  </div>
                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Active Traders</p>
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-2xl font-semibold mt-1">1,245</p>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2} className="col-span-full md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">My Portfolio</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Holdings</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-semibold">215</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-water-100 text-water-700">Credits</span>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Value</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-semibold">$5,280</p>
                      <span className="text-xs text-eco-600">+4.8%</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Button className="w-full">Buy</Button>
                    <Button variant="outline" className="w-full">Sell</Button>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
          
          {/* Marketplace filters and listings */}
          <div className="grid grid-cols-1 gap-8">
            {/* Filters */}
            <AnimatedCard delay={0.3} className="col-span-full">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search by name or seller" 
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  {/* Type filter */}
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <Select 
                      value={selectedType}
                      onValueChange={setSelectedType}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="agricultural">Agricultural</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                    <Select 
                      value={sortBy}
                      onValueChange={setSortBy}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="volume">Volume</SelectItem>
                        <SelectItem value="available">Availability</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </AnimatedCard>
            
            {/* Credit listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedCredits.map((credit, index) => (
                <AnimatedCard 
                  key={credit.id}
                  delay={0.4 + index * 0.05}
                  className="flex flex-col"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg ${getTypeColor(credit.type)}`}>
                          <Droplets className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">{credit.name}</h3>
                          <p className="text-sm text-muted-foreground">{credit.seller}</p>
                        </div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full border ${getTypeColor(credit.type)}`}>
                        {credit.type.charAt(0).toUpperCase() + credit.type.slice(1)}
                      </div>
                    </div>
                    
                    <div className="flex justify-between mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Price</p>
                        <p className="text-2xl font-semibold">${credit.price.toFixed(2)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-1">24h Change</p>
                        <p className={`font-medium flex items-center ${credit.change >= 0 ? 'text-eco-600' : 'text-destructive'}`}>
                          {credit.change >= 0 ? (
                            <TrendingUp className="h-4 w-4 mr-1" />
                          ) : (
                            <TrendingDown className="h-4 w-4 mr-1" />
                          )}
                          {credit.change > 0 ? '+' : ''}{credit.change}%
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-3 bg-muted/20 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Available</p>
                        <p className="font-medium">{credit.available.toLocaleString()}</p>
                      </div>
                      <div className="p-3 bg-muted/20 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Volume</p>
                        <p className="font-medium">{credit.volume}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Expires: {credit.expiry}</span>
                      </div>
                      <div className="flex items-center">
                        <Info className="h-4 w-4 mr-1" />
                        <span>{credit.certification}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="w-full text-sm" size="sm">
                        <Tag className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                      <Button className="w-full text-sm" size="sm">
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
