
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropletIcon, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-subtle' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary animate-fade-in"
        >
          <DropletIcon className="h-8 w-8" />
          <span className="font-heading text-xl font-semibold">AquaEco</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-foreground/80 font-medium hover:text-primary transition-colors link-hover",
                "animate-fade-in [animation-delay:var(--delay)]"
              )}
              style={{ '--delay': `${(index + 1) * 0.1}s` } as React.CSSProperties}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="animate-fade-in [animation-delay:0.5s]"
          >
            Sign In
          </Button>
          <Button 
            className="animate-fade-in [animation-delay:0.6s]"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 animate-fade-in" />
          ) : (
            <Menu className="h-6 w-6 animate-fade-in" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background flex flex-col pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out z-40",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-foreground font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col space-y-4 mt-8 w-full">
          <Button 
            variant="outline" 
            className="w-full animate-fade-in [animation-delay:0.5s]"
          >
            Sign In
          </Button>
          <Button 
            className="w-full animate-fade-in [animation-delay:0.6s]"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
