import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OfferBanner from '@/components/OfferBanner';
import TravelPackageCard from '@/components/TravelPackageCard';

const specialOffers = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1935&auto=format&fit=crop',
    title: 'Mystical Kerala Backwaters',
    description: 'A serene journey through the enchanting backwaters of Kerala. Enjoy houseboat stays and authentic local cuisine with this special monsoon offer.',
    highlights: ['20% Off Monsoon Special', 'Houseboat Stay Included', 'Guided Village Tours'],
    packageSlug: 'kerala-backwaters-monsoon-deal',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1599661046227-104a35ae75c5?q=80&w=1974&auto=format&fit=crop',
    title: 'Royal Rajasthan Off-Season Tour',
    description: "Experience the grandeur of Rajasthan's forts and palaces with our exclusive off-season desert safari package, avoiding the crowds.",
    highlights: ['15% Off Summer Deal', 'Camel Safari at Sunset', 'Stay in a Heritage Haveli'],
    packageSlug: 'royal-rajasthan-offseason-deal',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1617653292529-56c6623a8b79?q=80&w=1964&auto=format&fit=crop',
    title: 'Himalayan Adventure Trek',
    description: 'Challenge yourself with a breathtaking trek in the serene mountains of Himachal Pradesh. Special group discounts available now.',
    highlights: ['Group Discount Available', 'Guided Trekking & Camping', 'All-Inclusive Meals'],
    packageSlug: 'himalayan-adventure-trek-group-deal',
  },
   {
    imageUrl: 'https://images.unsplash.com/photo-1567225557597-90a4b70683de?q=80&w=1974&auto=format&fit=crop',
    title: 'Goa Beach Paradise Escape',
    description: "Relax on the sunny beaches of Goa. This limited-time offer includes a stay at a 4-star resort and complimentary water sports.",
    highlights: ['4-Star Resort Stay', 'Free Water Sports Activities', 'Limited Time Offer'],
    packageSlug: 'goa-beach-paradise-deal',
  },
];


const OffersPage = () => {
    console.log('OffersPage loaded');

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-8 md:py-12">
                    {/* Page Title */}
                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Special Offers & Deals</h1>
                        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                            Curated travel packages with exclusive discounts to inspire your next Indian adventure.
                        </p>
                    </div>
                    
                    {/* Featured Offer Banner */}
                    <section className="mb-12">
                        <OfferBanner 
                            title="Monsoon Getaway Sale"
                            description="Embrace the beauty of India this monsoon. Get up to 30% off on select packages to Kerala, Goa, and the Western Ghats."
                            ctaText="Explore All Packages"
                            ctaLink="/packages"
                        />
                    </section>

                    {/* Grid of offer packages */}
                    <section>
                         <h2 className="text-3xl font-bold tracking-tight mb-8 text-center md:text-left">
                            Featured Promotional Packages
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            {specialOffers.map((pkg) => (
                                <TravelPackageCard 
                                    key={pkg.packageSlug}
                                    imageUrl={pkg.imageUrl}
                                    title={pkg.title}
                                    description={pkg.description}
                                    highlights={pkg.highlights}
                                    packageSlug={pkg.packageSlug}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default OffersPage;