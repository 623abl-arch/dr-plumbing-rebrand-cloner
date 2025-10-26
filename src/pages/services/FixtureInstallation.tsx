import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Wrench, Droplets, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { serviceStructuredData } from "@/data/structuredData";

const FixtureInstallation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Professional Fixture Installation Services | Dr. Plumbing"
        description="Expert installation of sinks, faucets, toilets, and all plumbing fixtures. Quality workmanship and reliable service. Call (727) 755-7000!"
        keywords="fixture installation, faucet installation, toilet installation, sink installation, plumbing fixtures"
        canonicalUrl="https://drplumbing.com/services/fixture-installation"
        structuredData={serviceStructuredData("Fixture Installation", "Professional installation of sinks, faucets, toilets, and all plumbing fixtures.")}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Fixture Installation</h1>
            <p className="text-xl opacity-90 mb-8">
              Expert installation of all plumbing fixtures with precision and care.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Installation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Complete Fixture Installation Services</h2>
            <p className="text-muted-foreground mb-6 text-center">
              At Dr. Plumbing, we specialize in professional installation of all types of plumbing fixtures. 
              Whether you're upgrading your bathroom, renovating your kitchen, or installing new fixtures throughout 
              your home, our experienced technicians ensure proper installation for optimal performance and longevity.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Wrench className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Installation</h3>
                <p className="text-sm text-muted-foreground">Professional installation by licensed plumbers</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-muted-foreground">All work backed by our quality guarantee</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Timely Service</h3>
                <p className="text-sm text-muted-foreground">On-time installation with minimal disruption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Fixtures We Install</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Kitchen Fixtures</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Kitchen faucets and pull-down sprayers
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Kitchen sinks (undermount, drop-in, farmhouse)
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Garbage disposals
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Instant hot water dispensers
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Bathroom Fixtures</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Bathroom faucets and widespread sets
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Vanity sinks and vessel sinks
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Showers and tub-shower combinations
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Shower valves and trim kits
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Toilet Installation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Standard and comfort height toilets
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Dual-flush and low-flow toilets
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Wall-hung toilets
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Bidet installation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Additional Fixtures</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Laundry room sinks and faucets
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Outdoor hose bibs and spigots
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Water filtration systems
                    </li>
                    <li className="flex items-start">
                      <Droplets className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      Ice maker lines and connections
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Dr. Plumbing?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                  <p className="text-sm text-muted-foreground">
                    All our technicians are fully licensed and insured for your protection.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Quality Products</h3>
                  <p className="text-sm text-muted-foreground">
                    We work with top brands and can install fixtures you provide or recommend quality options.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Proper Installation</h3>
                  <p className="text-sm text-muted-foreground">
                    Every fixture is installed to manufacturer specifications and local code requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Warranty Protected</h3>
                  <p className="text-sm text-muted-foreground">
                    All installation work is covered by our service warranty.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for New Fixtures?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for professional installation</p>
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

export default FixtureInstallation;
