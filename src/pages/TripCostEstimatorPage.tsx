import React from 'react';
import { Link } from 'react-router-dom';

// Import Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import Custom Page-Specific Components
import TripCostEstimatorTool from '@/components/TripCostEstimatorTool';

// Import Shadcn UI Components for layout and supplementary content
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const TripCostEstimatorPage = () => {
  console.log('TripCostEstimatorPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        {/* The main interactive tool is the centerpiece of the page */}
        <section aria-labelledby="estimator-title">
          {/* h1 is inside the tool, so we use aria-labelledby */}
          <h1 id="estimator-title" className="sr-only">Trip Cost Estimator</h1>
          <TripCostEstimatorTool />
        </section>

        {/* Supplementary information card to guide the user on next steps */}
        <section className="mt-12 md:mt-20" aria-labelledby="next-steps-title">
          <Card className="max-w-2xl mx-auto bg-transparent border-dashed shadow-none">
            <CardHeader>
              <CardTitle id="next-steps-title" className="text-2xl font-bold text-center">What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground space-y-6">
              <p>
                Once you are happy with your customized trip, click the "Book Now" button.
                You'll be taken to our secure booking page to finalize your details and payment.
              </p>
              <ul className="text-left space-y-3 inline-block">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Your choices will be saved and carried over.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Enter traveler information for all guests.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Complete your booking with a secure payment.</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button asChild size="lg" variant="outline">
                   <Link to="/booking">Go to Booking Page</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TripCostEstimatorPage;