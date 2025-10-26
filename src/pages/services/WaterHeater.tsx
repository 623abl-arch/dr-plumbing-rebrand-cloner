import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Flame, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { serviceStructuredData } from "@/data/structuredData";
import waterHeaterImage from "@/assets/water-heater.jpg";

const WaterHeater = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Water Heater Repair, Installation & Service | Dr. Plumbing"
        description="Expert water heater repair, replacement, and maintenance for all brands and models. Tankless, gas, and electric water heater services. Licensed & certified. Call (727) 755-7000!"
        keywords="water heater repair, tankless water heater, water heater replacement, water heater installation, gas water heater"
        canonicalUrl="https://drplumbing.com/services/water-heater"
        structuredData={serviceStructuredData("Water Heater Services", "Complete water heater repair, installation, and maintenance services for all types including tankless, gas, and electric systems.")}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Water Heater Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Expert repair, maintenance, and replacement for all water heater types. A name you can trust!
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <OptimizedImage
                src={waterHeaterImage}
                alt="Expert water heater repair and installation services"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Trusted Water Heater Experts</h2>
              <p className="text-muted-foreground mb-6">
                At Dr. Plumbing, we understand how important a reliable hot water supply is for your home or 
                business. Our certified technicians are experts in all types of water heaters - from traditional 
                tank models to modern tankless systems.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you need emergency repairs, routine maintenance, or a complete replacement, we provide 
                honest assessments and quality workmanship backed by our satisfaction guarantee.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Flame className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">All Brands & Models</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Licensed & Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Warranty Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Water Heater Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Water Heater Repair</h3>
                  <p className="text-muted-foreground">
                    Fast, reliable repairs for no hot water, leaks, strange noises, and temperature issues. 
                    Same-day service available.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Water Heater Replacement</h3>
                  <p className="text-muted-foreground">
                    Professional installation of new water heaters with expert guidance on choosing the 
                    right size and type for your needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Tankless Water Heaters</h3>
                  <p className="text-muted-foreground">
                    Installation and service of energy-efficient tankless systems that provide endless hot 
                    water on demand.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Maintenance Services</h3>
                  <p className="text-muted-foreground">
                    Regular maintenance including flushing, anode rod replacement, and inspections to extend 
                    your water heater's life.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Gas & Electric</h3>
                  <p className="text-muted-foreground">
                    Expert service for both gas and electric water heaters, ensuring safe and efficient operation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Emergency Service</h3>
                  <p className="text-muted-foreground">
                    24/7 emergency repairs for water heater failures, leaks, and other urgent issues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Service */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Signs You Need Water Heater Service</h2>
            <p className="text-center text-muted-foreground mb-12">
              Contact us if you notice any of these warning signs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-secondary bg-accent">
                <h3 className="font-semibold mb-2">No Hot Water</h3>
                <p className="text-sm text-muted-foreground">
                  Complete loss of hot water or water not heating to proper temperature.
                </p>
              </div>
              <div className="p-4 border-l-4 border-secondary bg-accent">
                <h3 className="font-semibold mb-2">Strange Noises</h3>
                <p className="text-sm text-muted-foreground">
                  Rumbling, popping, or banging sounds from the water heater tank.
                </p>
              </div>
              <div className="p-4 border-l-4 border-secondary bg-accent">
                <h3 className="font-semibold mb-2">Water Leaks</h3>
                <p className="text-sm text-muted-foreground">
                  Visible water pooling around the base of your water heater.
                </p>
              </div>
              <div className="p-4 border-l-4 border-secondary bg-accent">
                <h3 className="font-semibold mb-2">Rusty Water</h3>
                <p className="text-sm text-muted-foreground">
                  Brown or rust-colored hot water coming from your taps.
                </p>
              </div>
              <div className="p-4 border-l-4 border-secondary bg-accent">
                <h3 className="font-semibold mb-2">Age</h3>
                <p className="text-sm text-muted-foreground">
                  Water heater is 10+ years old and showing signs of decreased efficiency.
                </p>
              </div>
              <div className="p-4 border-l-4 border-secondary bg-accent">
                <h3 className="font-semibold mb-2">High Energy Bills</h3>
                <p className="text-sm text-muted-foreground">
                  Unexplained increase in utility costs indicating decreased efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Water Heater Service?</h2>
          <p className="text-xl mb-8 opacity-90">Expert service for repair, maintenance, or replacement</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="emergency" size="lg" asChild>
              <a href="tel:727-755-7000">
                <Phone className="mr-2" />
                Call (727) 755-7000
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WaterHeater;
