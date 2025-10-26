import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Droplets, Video } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { serviceStructuredData } from "@/data/structuredData";
import drainImage from "@/assets/drain-service.jpg";

const Drain = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Professional Drain Cleaning & Repair Services | Dr. Plumbing"
        description="Expert drain cleaning, hydro jetting, camera inspections, and drain repair services. Advanced technology for clogged drains, sewer lines, and plumbing systems. Call (727) 755-7000!"
        keywords="drain cleaning, hydro jetting, drain repair, clogged drain, sewer line cleaning, camera inspection"
        canonicalUrl="https://drplumbing.com/services/drain"
        structuredData={serviceStructuredData("Drain Cleaning & Repair", "Professional drain cleaning and repair services using advanced technology including camera inspections and hydro jetting.")}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Drain & Plumbing Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Keeping your drains clean and running smoothly with advanced technology and expert care.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Drain Solutions</h2>
              <p className="text-muted-foreground mb-6">
                At Dr. Plumbing, we're on a mission to keep your drains clean and your plumbing system running 
                smoothly. Our experienced technicians use state-of-the-art equipment including camera inspections, 
                hydro jetting, and trenchless repair technology.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you're dealing with a slow drain, complete blockage, or need preventive maintenance, 
                we have the tools and expertise to solve your drain problems efficiently.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Video className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Advanced Camera Inspections</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Droplets className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Hydro Jetting Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Guaranteed Results</span>
                </div>
              </div>
            </div>
            <div>
              <OptimizedImage
                src={drainImage}
                alt="Professional drain cleaning and repair service with advanced equipment"
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Drain Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Drain Cleaning</h3>
                  <p className="text-muted-foreground">
                    Professional cleaning for kitchen sinks, bathroom drains, and floor drains using safe, 
                    effective methods that protect your pipes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Camera Inspections</h3>
                  <p className="text-muted-foreground">
                    High-definition video inspections to accurately diagnose drain and pipe issues without 
                    invasive digging or guesswork.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Hydro Jetting</h3>
                  <p className="text-muted-foreground">
                    High-pressure water jetting to clear stubborn blockages and clean pipe walls of grease, 
                    scale, and debris buildup.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Sewer Line Services</h3>
                  <p className="text-muted-foreground">
                    Complete sewer line inspection, cleaning, repair, and replacement services including 
                    trenchless technology options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Root Removal</h3>
                  <p className="text-muted-foreground">
                    Safe and effective removal of tree roots that have invaded your sewer or drain lines.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Preventive Maintenance</h3>
                  <p className="text-muted-foreground">
                    Regular drain maintenance programs to prevent clogs and extend the life of your 
                    plumbing system.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Drain Care Tips</h2>
            <p className="text-center text-muted-foreground mb-12">
              Follow these tips to keep your drains flowing freely and prevent clogs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Avoid Fats & Oils</h3>
                  <p className="text-sm text-muted-foreground">
                    Never pour cooking oils or fats down the drain - they solidify and cause clogs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Use Drain Strainers</h3>
                  <p className="text-sm text-muted-foreground">
                    Install strainers in sinks and showers to catch hair and debris before they enter pipes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Hot Water Flush</h3>
                  <p className="text-sm text-muted-foreground">
                    Run hot water after each use to help flush away soap and residue.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Professional Cleaning</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule annual professional drain cleaning to prevent buildup and clogs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Drain Service?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for expert drain cleaning and repair</p>
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

export default Drain;
