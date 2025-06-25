import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Plane, Hotel, Car, Sparkles, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

// Type definitions for the estimator options
interface CostOptions {
  flights: boolean;
  hotel: 'none' | '2-star' | '3-star' | '4-star' | '5-star';
  cabs: boolean;
  activities: {
    dolphinTour: boolean;
    scubaDiving: boolean;
    cityGuide: boolean;
  };
}

// Pricing constants for calculation
const PRICING = {
    flights: 15000,
    hotel: { 'none': 0, '2-star': 3000, '3-star': 5000, '4-star': 8000, '5-star': 12000 },
    cabs: 4000,
    activities: { dolphinTour: 1500, scubaDiving: 3000, cityGuide: 2000 },
};

const TripCostEstimatorTool: React.FC = () => {
    console.log('TripCostEstimatorTool loaded');

    // State for user selections
    const [options, setOptions] = useState<CostOptions>({
        flights: false,
        hotel: 'none',
        cabs: false,
        activities: {
            dolphinTour: false,
            scubaDiving: false,
            cityGuide: false,
        },
    });

    // State for total calculated cost
    const [totalCost, setTotalCost] = useState(0);

    // Effect to recalculate cost whenever options change
    useEffect(() => {
        let cost = 0;
        if (options.flights) cost += PRICING.flights;
        if (options.cabs) cost += PRICING.cabs;
        cost += PRICING.hotel[options.hotel];
        if (options.activities.dolphinTour) cost += PRICING.activities.dolphinTour;
        if (options.activities.scubaDiving) cost += PRICING.activities.scubaDiving;
        if (options.activities.cityGuide) cost += PRICING.activities.cityGuide;
        setTotalCost(cost);
    }, [options]);

    // Framer Motion animated counter setup
    const spring = useSpring(totalCost, { mass: 0.8, stiffness: 75, damping: 15 });
    const displayCost = useTransform(spring, (current) =>
        Math.round(current).toLocaleString('en-IN')
    );
    
    useEffect(() => {
        spring.set(totalCost);
    }, [totalCost, spring]);


    // Event Handlers
    const handleFlightToggle = (checked: boolean) => setOptions(prev => ({ ...prev, flights: checked }));
    const handleCabToggle = (checked: boolean) => setOptions(prev => ({ ...prev, cabs: checked }));
    const handleHotelChange = (value: CostOptions['hotel']) => setOptions(prev => ({ ...prev, hotel: value }));
    const handleActivityChange = (activity: keyof CostOptions['activities']) => (checked: boolean | 'indeterminate') => {
        setOptions(prev => ({
            ...prev,
            activities: { ...prev.activities, [activity]: checked === true },
        }));
    };

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-2xl">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">Trip Cost Estimator</CardTitle>
                <CardDescription className="text-center text-base">
                    Customize your trip and see the estimated cost in real-time.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-6">
                <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center shadow-lg">
                    <Label className="text-lg font-medium text-primary-foreground/80">Estimated Cost</Label>
                    <div className="flex items-center justify-center text-5xl font-extrabold tracking-tight mt-2">
                        <IndianRupee className="h-10 w-10 mr-2" />
                        <motion.span>{displayCost}</motion.span>
                    </div>
                </div>

                <Separator />

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Core Services</h3>
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <Plane className="h-6 w-6 text-muted-foreground" />
                            <Label htmlFor="flights-toggle" className="text-base cursor-pointer">Include Return Flights</Label>
                        </div>
                        <Switch id="flights-toggle" checked={options.flights} onCheckedChange={handleFlightToggle} />
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-3">
                            <Car className="h-6 w-6 text-muted-foreground" />
                            <Label htmlFor="cabs-toggle" className="text-base cursor-pointer">Airport & Local Cabs</Label>
                        </div>
                        <Switch id="cabs-toggle" checked={options.cabs} onCheckedChange={handleCabToggle} />
                    </div>
                </div>

                <Separator />

                <div className="space-y-4">
                     <h3 className="text-xl font-semibold flex items-center"><Hotel className="h-6 w-6 mr-3 text-muted-foreground" />Hotel Preference</h3>
                     <RadioGroup value={options.hotel} onValueChange={(value) => handleHotelChange(value as CostOptions['hotel'])} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {(['2-star', '3-star', '4-star', '5-star'] as const).map((star) => (
                             <div key={star}>
                                 <RadioGroupItem value={star} id={`hotel-${star}`} className="sr-only" />
                                 <Label htmlFor={`hotel-${star}`} className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary transition-all">
                                     {star}
                                 </Label>
                             </div>
                        ))}
                         <div>
                             <RadioGroupItem value="none" id="hotel-none" className="sr-only" />
                             <Label htmlFor="hotel-none" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary transition-all h-full">
                                 None
                             </Label>
                         </div>
                     </RadioGroup>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center"><Sparkles className="h-6 w-6 mr-3 text-muted-foreground" />Optional Activities</h3>
                    <div className="space-y-3">
                         <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                             <Checkbox id="dolphin-tour" checked={options.activities.dolphinTour} onCheckedChange={handleActivityChange('dolphinTour')} />
                             <Label htmlFor="dolphin-tour" className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer">
                                 Dolphin Tour
                             </Label>
                         </div>
                         <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                             <Checkbox id="scuba-diving" checked={options.activities.scubaDiving} onCheckedChange={handleActivityChange('scubaDiving')} />
                             <Label htmlFor="scuba-diving" className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer">
                                 Scuba Diving
                             </Label>
                         </div>
                         <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                             <Checkbox id="city-guide" checked={options.activities.cityGuide} onCheckedChange={handleActivityChange('cityGuide')} />
                             <Label htmlFor="city-guide" className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer">
                                 Private City Guide
                             </Label>
                         </div>
                    </div>
                </div>

            </CardContent>
            <CardFooter>
                <Button size="lg" className="w-full text-lg" asChild>
                    <Link to="/booking">Book Now &amp; Finalize Details</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default TripCostEstimatorTool;