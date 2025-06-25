import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TravelPackageCard from '@/components/TravelPackageCard';
import OfferBanner from '@/components/OfferBanner';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Icons
import { Search } from 'lucide-react';

// Placeholder data for travel packages
const featuredPackages = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1560179406-1f324a8369de?q=80&w=1974&auto=format&fit=crop',
    title: 'Goa Beach Paradise',
    description: 'Relax on the sun-kissed beaches of Goa, enjoy vibrant nightlife, and indulge in delicious seafood. A perfect getaway for fun and relaxation.',
    highlights: ['4-star beachfront stay', 'Water sports included', 'Private sunset cruise'],
    packageSlug: 'goa-beach-paradise'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
    title: 'Kerala Backwater Bliss',
    description: 'Drift through the serene backwaters of Kerala on a traditional houseboat. Experience lush landscapes and the unique culture of "God\'s Own Country".',
    highlights: ['Luxury houseboat cruise', 'Ayurvedic spa session', 'Local cuisine tour'],
    packageSlug: 'kerala-backwater-bliss'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1603294382193-2738e4db7235?q=80&w=2070&auto=format&fit=crop',
    title: 'Rajasthan Royal Heritage',
    description: 'Explore the majestic forts, opulent palaces, and vibrant culture of Rajasthan. A journey through the land of kings, deserts, and legends.',
    highlights: ['Heritage palace stays', 'Thar Desert camel safari', 'Guided city tours'],
    packageSlug: 'rajasthan-royal-heritage'
  }
];


const Homepage = () => {
  console.log('Homepage loaded');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to packages page with search query
      navigate(`/packages?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
        // Or just navigate to the packages page if query is empty
        navigate('/packages');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1588422152284-5541c153f374?q=80&w=2070&auto=format&fit=crop" 
              alt="Inspiring landscape of the Himalayas" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 container px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
              Discover the Heart of India
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-md">
              From majestic mountains to serene backwaters, your unforgettable journey starts here.
            </p>
            <form 
              onSubmit={handleSearch} 
              className="mt-8 max-w-xl mx-auto flex w-full items-center space-x-2 bg-white rounded-full p-2 shadow-2xl"
            >
              <div className="pl-3">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Search for destinations or packages (e.g., 'Goa')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-base"
              />
              <Button type="submit" size="lg" className="rounded-full">
                Search
              </Button>
            </form>
          </div>
        </section>

        {/* Featured Packages Section */}
        <section className="py-16 sm:py-24 bg-muted/40">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Travel Packages</h2>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                Handpicked collections of trips and tours to inspiring destinations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPackages.map((pkg) => (
                <TravelPackageCard key={pkg.packageSlug} {...pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* Offer Banner Section */}
        <section className="py-16 sm:py-24">
            <div className="container">
                <OfferBanner
                    title="Monsoon Getaway Offers"
                    description="Get up to 20% off on select packages. Book now and make your rainy season unforgettable."
                    ctaText="View All Offers"
                    ctaLink="/offers" // Path from App.tsx
                />
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Homepage;