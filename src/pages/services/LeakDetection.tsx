import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Search, Droplets, Radio } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { serviceStructuredData } from "@/data/structuredData";

const LeakDetection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Advanced Leak Detection Services | Dr. Plumbing"
        description="Advanced leak detection finds hidden leaks before they cause damage. Non-invasive technology saves time & money. Call (727) 755-7000 for inspection!"
        keywords="leak detection, water leak detection, hidden leaks, leak finder, plumbing leak, slab leak"
        canonicalUrl="https://drplumbing.com/services/leak-detection"
        structuredData={serviceStructuredData("Leak Detection", "Advanced technology to find and fix hidden leaks before they cause damage.")}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Leak Detection Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Find hidden leaks before they cause serious damage with our state-of-the-art technology.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Detection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Leak Detection Matters</h2>
            <p className="text-muted-foreground mb-6 text-center">
              Hidden water leaks can cause thousands of dollars in damage before you even know they exist. 
              At Dr. Plumbing, we use advanced electronic leak detection equipment to locate leaks in walls, 
              under slabs, in ceilings, and underground - all without destructive digging or demolition.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Search className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Accurate Detection</h3>
                <p className="text-sm text-muted-foreground">Pinpoint leak location precisely</p>
              </div>
              <div className="text-center">
                <Radio className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Non-Invasive</h3>
                <p className="text-sm text-muted-foreground">Find leaks without tearing up walls</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Save Money</h3>
                <p className="text-sm text-muted-foreground">Prevent costly water damage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Methods */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Detection Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Electronic Leak Detection</h3>
                  <p className="text-muted-foreground">
                    Advanced electronic equipment that listens for the sound of water escaping from 
                    pipes, even through concrete and walls. Highly accurate for pinpointing leak locations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Thermal Imaging</h3>
                  <p className="text-muted-foreground">
                    Infrared cameras detect temperature differences caused by water leaks behind walls 
                    and under floors. Completely non-invasive visual detection method.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Video Inspection</h3>
                  <p className="text-muted-foreground">
                    High-definition cameras inserted into pipes allow us to visually identify cracks, 
                    breaks, and leaks inside drain lines and sewer pipes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Pressure Testing</h3>
                  <p className="text-muted-foreground">
                    Specialized pressure testing equipment identifies leaks in water supply lines by 
                    monitoring pressure drops in isolated sections of piping.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Moisture Meters</h3>
                  <p className="text-muted-foreground">
                    Detect elevated moisture levels in walls, floors, and ceilings that indicate the 
                    presence of hidden water leaks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Gas Leak Detection</h3>
                  <p className="text-muted-foreground">
                    Specialized equipment for safely detecting natural gas and propane leaks throughout 
                    your home's gas piping system.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Leaks */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Leaks We Can Detect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Droplets className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Slab Leaks</h3>
                  <p className="text-sm text-muted-foreground">
                    Water lines leaking under concrete foundation slabs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Droplets className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Hidden Wall Leaks</h3>
                  <p className="text-sm text-muted-foreground">
                    Pipes leaking behind walls and in ceiling cavities.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Droplets className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Underground Leaks</h3>
                  <p className="text-sm text-muted-foreground">
                    Water service lines and irrigation leaks buried underground.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Droplets className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Fixture Leaks</h3>
                  <p className="text-sm text-muted-foreground">
                    Toilets, faucets, and fixtures with slow, hard-to-detect leaks.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Droplets className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Pool & Spa Leaks</h3>
                  <p className="text-sm text-muted-foreground">
                    Swimming pool and hot tub plumbing leak detection.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Droplets className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Gas Leaks</h3>
                  <p className="text-sm text-muted-foreground">
                    Natural gas and propane line leak detection for safety.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Suspect a Hidden Leak?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us for professional leak detection services</p>
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

export default LeakDetection;
