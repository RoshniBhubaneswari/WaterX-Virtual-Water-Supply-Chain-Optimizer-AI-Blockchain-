
import { Link } from 'react-router-dom';
import { DropletIcon, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Community', href: '/community' },
        { name: 'Case Studies', href: '/case-studies' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms', href: '/terms' },
        { name: 'Privacy', href: '/privacy' },
        { name: 'Cookies', href: '/cookies' },
        { name: 'Licenses', href: '/licenses' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-border py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-primary mb-4">
              <DropletIcon className="h-6 w-6" />
              <span className="font-heading text-xl font-semibold">AquaEco</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolutionizing water conservation through innovative marketplace solutions. 
              Connect, trade, and make a sustainable impact on our planet's most precious resource.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-medium text-foreground mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 md:mt-16 border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-medium text-foreground mb-2">Stay updated</h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto min-w-[240px]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SRM IST TRICHY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
