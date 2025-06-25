import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Mountain, Menu } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Packages', href: '/packages' },
    { label: 'Offers', href: '/offers' },
    { label: 'Trip Cost Estimator', href: '/trip-cost-estimator' },
  ];

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-muted-foreground'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg hidden sm:inline-block">Inspire India Travels</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={getNavLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost">Login</Button>
          <Button>Register</Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 pt-6">
                <Link to="/" className="flex items-center gap-2 mb-4">
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">Inspire India Travels</span>
                </Link>
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={getNavLinkClass}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t">
                    <Button variant="ghost">Login</Button>
                    <Button>Register</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;