import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { serviceStructuredData } from "@/data/structuredData";
import waterDamageImage from "@/assets/water-damage.jpg";

const WaterDamage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Water Damage Restoration Services | Dr. Plumbing"
        description="Professional water damage restoration services available 24/7. Expert cleanup, drying, and repair for flooding, leaks, and water emergencies. Average cost $2,400-$4,250. Call (555) 123-4567!"
        keywords="water damage restoration, flood cleanup, water extraction, emergency water removal, leak repair"
        canonicalUrl="https://drplumbing.com/services/water-damage"
        structuredData={serviceStructuredData("Water Damage Restoration", "Complete water damage restoration including extraction, drying, cleanup, and repair services available 24/7.")}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Water Damage Restoration</h1>
            <p className="text-xl opacity-90 mb-8">
              Expert experience and equipment for all your water damage problems. Fast response 24/7!
            </p>
            <Button variant="emergency" size="lg" asChild>
              <a href="tel:555-123-4567">
                <Phone className="mr-2" />
                Emergency: (555) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <div className="bg-emergency text-emergency-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold">
            <AlertTriangle className="inline-block mr-2 h-5 w-5" />
            Average water damage restoration costs $2,400 - $4,250. Don't wait - every minute counts!
          </p>
        </div>
      </div>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Water Damage Restoration</h2>
              <p className="text-muted-foreground mb-6">
                Water damage can occur suddenly and cause devastating effects to your property. At Dr. Plumbing, 
                we have the experience, expertise, and advanced equipment needed to handle water damage restoration 
                efficiently and effectively.
              </p>
              <p className="text-muted-foreground mb-6">
                Our certified technicians respond quickly to minimize damage, extract water, dry affected areas, 
                and restore your property to pre-loss condition. We work with insurance companies to make the 
                process as smooth as possible.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Rapid Emergency Response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Advanced Drying Equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Insurance Claim Assistance</span>
                </div>
              </div>
            </div>
            <div>
              <OptimizedImage
                src={waterDamageImage}
                alt="Professional water damage restoration and cleanup service"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Water Damage Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Emergency Water Extraction</h3>
                  <p className="text-muted-foreground">
                    Immediate removal of standing water using powerful pumps and vacuum systems to prevent 
                    further damage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Structural Drying</h3>
                  <p className="text-muted-foreground">
                    Professional drying of walls, floors, and ceilings using industrial dehumidifiers and 
                    air movers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Mold Prevention</h3>
                  <p className="text-muted-foreground">
                    Rapid response and thorough drying to prevent mold growth and ensure healthy indoor air quality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Moisture Detection</h3>
                  <p className="text-muted-foreground">
                    Advanced moisture meters and thermal imaging to find hidden water and ensure complete drying.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Content Protection</h3>
                  <p className="text-muted-foreground">
                    Moving and protecting your belongings, furniture, and valuables from water damage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Restoration Services</h3>
                  <p className="text-muted-foreground">
                    Complete restoration including repairs, painting, and reconstruction to restore your property.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Common Causes of Water Damage</h2>
            <p className="text-center text-muted-foreground mb-12">
              Understanding the causes helps with prevention and quick response:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-emergency mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Burst or Leaking Pipes</h3>
                  <p className="text-sm text-muted-foreground">
                    Frozen, corroded, or damaged pipes can release large amounts of water quickly.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-emergency mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Appliance Failures</h3>
                  <p className="text-sm text-muted-foreground">
                    Water heater leaks, washing machine overflows, and dishwasher malfunctions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-emergency mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Sewer Backups</h3>
                  <p className="text-sm text-muted-foreground">
                    Clogged sewer lines causing contaminated water to back up into your home.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-emergency mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Toilet Overflows</h3>
                  <p className="text-sm text-muted-foreground">
                    Clogged toilets or supply line failures causing water to flood bathrooms.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-emergency/10 border-2 border-emergency rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-center">Act Fast!</h3>
              <p className="text-center text-muted-foreground">
                Water damage worsens with time. The first 24-48 hours are critical to prevent mold growth and 
                structural damage. Contact us immediately for emergency water damage restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiencing Water Damage?</h2>
          <p className="text-xl mb-8 opacity-90">Call now for immediate emergency response - 24/7 service available</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="emergency" size="lg" asChild>
              <a href="tel:555-123-4567">
                <Phone className="mr-2" />
                Emergency: (555) 123-4567
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Request Service</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WaterDamage;
