import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Megaphone } from 'lucide-react';

interface OfferBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const OfferBanner: React.FC<OfferBannerProps> = ({ title, description, ctaText, ctaLink }) => {
  console.log('OfferBanner loaded');

  return (
    <div className="
      relative 
      overflow-hidden 
      rounded-lg 
      p-8 
      bg-gradient-to-tr from-gray-900 via-gray-800 to-slate-900
      border border-cyan-500/30 
      shadow-lg shadow-cyan-500/10 
      transition-all duration-300 
      hover:shadow-xl hover:shadow-cyan-500/20
      hover:border-cyan-500/50
    ">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="hidden sm:block p-3 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            <Megaphone className="h-8 w-8 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
            <p className="text-gray-300 mt-1 max-w-lg">{description}</p>
          </div>
        </div>
        
        <Button asChild size="lg" className="bg-cyan-500 text-white hover:bg-cyan-600 shrink-0 group">
          <Link to={ctaLink}>
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OfferBanner;