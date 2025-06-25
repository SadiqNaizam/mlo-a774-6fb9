import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CheckCircle } from 'lucide-react';

// Define the props for the component
interface TravelPackageCardProps {
  imageUrl: string;
  title: string;
  description: string;
  highlights: string[];
  packageSlug: string; // e.g., "beach-paradise-goa"
}

const TravelPackageCard: React.FC<TravelPackageCardProps> = ({
  imageUrl,
  title,
  description,
  highlights,
  packageSlug,
}) => {
  console.log('TravelPackageCard loaded for:', title);

  // Construct the link to the estimator page with the package identifier
  const linkTo = `/trip-cost-estimator?package=${packageSlug}`;

  return (
    // The main link wrapper with the group class for hover effects and accessibility focus rings
    <Link to={linkTo} className="group block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg">
      <Card className="w-full h-full overflow-hidden transition-all duration-300 border group-hover:shadow-xl group-hover:border-primary flex flex-col">
        {/* Image container with relative positioning for the hover overlay */}
        <div className="relative">
          <AspectRatio ratio={4 / 3}>
            <img
              src={imageUrl}
              alt={`Promotional image for ${title}`}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
          {/* Dark overlay that appears on hover to improve text legibility */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />
          {/* Highlights section that fades and slides in on hover */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <h3 className="text-lg font-semibold text-white mb-2">Key Highlights</h3>
            <ul className="space-y-1.5 text-sm text-gray-100">
              {highlights.slice(0, 3).map((highlight, index) => ( // Show a maximum of 3 highlights
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Text content below the image */}
        <CardContent className="p-4 flex-grow bg-card">
          <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
            {title}
          </CardTitle>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TravelPackageCard;