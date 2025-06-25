import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TravelPackageCard from '@/components/TravelPackageCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ListFilter } from 'lucide-react';

const travelPackages = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1560179406-1f6c26b4b68b?q=80&w=2071&auto=format&fit=crop',
    title: 'Goa Beach Paradise',
    description: 'Experience the vibrant beaches and nightlife of North Goa. This package offers a perfect blend of relaxation and adventure, with stays at a premium beachfront resort.',
    highlights: ['4-star beachfront resort', 'Water sports combo included', 'Daily breakfast buffet'],
    packageSlug: 'goa-beach-paradise'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1575780123985-1d6e1f79c24e?q=80&w=2070&auto=format&fit=crop',
    title: 'Serene South Goa Escape',
    description: 'Discover the tranquil side of Goa with pristine, quiet beaches and lush landscapes. Ideal for couples and families seeking a peaceful retreat away from the crowds.',
    highlights: ['Luxury 5-star hotel', 'Private beach access', 'Spa and wellness sessions'],
    packageSlug: 'goa-serene-escape'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1620367373891-23947c6e0e0e?q=80&w=1974&auto=format&fit=crop',
    title: 'Himalayan Trekking Adventure',
    description: 'Embark on a breathtaking journey through the majestic Himalayas. This package is designed for thrill-seekers and nature lovers, offering guided treks and stunning vistas.',
    highlights: ['Guided multi-day trek', 'All camping gear provided', 'Meals included on trek days'],
    packageSlug: 'himalayan-trekking'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1588136858462-a5b67e0b2a75?q=80&w=2070&auto=format&fit=crop',
    title: 'Royal Rajasthan Heritage Tour',
    description: 'Explore the land of kings with our heritage tour of Rajasthan. Visit majestic forts, opulent palaces, and vibrant markets in Jaipur, Udaipur, and Jodhpur.',
    highlights: ['Stays in heritage hotels', 'Private guided city tours', 'Camel safari in the desert'],
    packageSlug: 'rajasthan-heritage'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
    title: 'Kerala Backwaters Bliss',
    description: 'Float along the serene backwaters of Kerala in a traditional houseboat. Experience the unique culture, cuisine, and lush greenery of "God\'s Own Country".',
    highlights: ['Overnight houseboat stay', 'Authentic Keralan cuisine', 'Canoe village tour'],
    packageSlug: 'kerala-backwaters'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
    title: 'Wonders of the Taj Mahal',
    description: 'Witness the eternal beauty of the Taj Mahal and explore the historic Mughal capital of Agra. A short but unforgettable trip into India\'s rich history.',
    highlights: ['Guided tour of Taj Mahal', 'Visit to Agra Fort', '4-star hotel accommodation'],
    packageSlug: 'taj-mahal-wonders'
  }
];

const PackagesPage = () => {
  console.log('PackagesPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container py-8 md:py-12">
          {/* Page Header and Filters */}
          <section className="mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Discover Your Next Adventure</h1>
                <p className="text-muted-foreground mt-2">Browse our curated packages or use filters to find your perfect trip.</p>
              </div>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <ListFilter className="mr-2 h-4 w-4" />
                      Sort by
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Popularity</DropdownMenuItem>
                    <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                    <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:gap-6">
                <div className="flex items-center space-x-2">
                    <Checkbox id="filter-flights" />
                    <Label htmlFor="filter-flights" className="font-medium cursor-pointer">Includes Flights</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="filter-5star" />
                    <Label htmlFor="filter-5star" className="font-medium cursor-pointer">5-Star Hotels</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="filter-adventure" />
                    <Label htmlFor="filter-adventure" className="font-medium cursor-pointer">Adventure</Label>
                </div>
            </div>
          </section>

          {/* Packages Grid */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {travelPackages.map((pkg) => (
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
};

export default PackagesPage;