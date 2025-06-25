import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
                <Link to="/" className="flex items-center gap-2 mb-2">
                    <Mountain className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg text-foreground">Inspire India Travels</span>
                </Link>
                <p className="text-sm text-center md:text-left">
                    Your journey to discover India begins here.
                </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
                <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </nav>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm">
            <p>&copy; {currentYear} Inspire India Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;