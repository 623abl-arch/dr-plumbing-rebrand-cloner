import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Settings, Wrench, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { serviceStructuredData } from "@/data/structuredData";

const PipeRepair = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Pipe Repair & Replacement Services | Dr. Plumbing"
        description="Expert pipe repair and replacement for damaged or aging pipes. Copper, PEX, and galvanized pipe services. Call (727) 755-7000!"
        keywords="pipe repair, pipe replacement, copper pipes, PEX pipes, broken pipe, pipe leak"
        canonicalUrl="https://drplumbing.com/services/pipe-repair"
        structuredData={serviceStructuredData("Pipe Repair & Replacement", "Expert repairs and replacements for damaged or aging pipes.")}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pipe Repair & Replacement</h1>
            <p className="text-xl opacity-90 mb-8">
              Expert solutions for damaged, leaking, or aging pipes throughout your home.
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Professional Pipe Services</h2>
            <p className="text-muted-foreground mb-6 text-center">
              Whether you're dealing with a burst pipe emergency, slow leaks, or planning to replace aging pipes, 
              Dr. Plumbing has the expertise to handle it all. We work with all types of piping materials and 
              offer both repair and full replacement services to ensure your plumbing system operates flawlessly.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Settings className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">All Pipe Types</h3>
                <p className="text-sm text-muted-foreground">Copper, PEX, PVC, and galvanized</p>
              </div>
              <div className="text-center">
                <Wrench className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Repairs</h3>
                <p className="text-sm text-muted-foreground">Fast, reliable pipe repair service</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality Work</h3>
                <p className="text-sm text-muted-foreground">Guaranteed workmanship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Pipe Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Emergency Pipe Repair</h3>
                  <p className="text-muted-foreground">
                    24/7 emergency response for burst pipes, major leaks, and urgent pipe failures. 
                    We'll stop the water damage and make permanent repairs quickly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Leak Repair</h3>
                  <p className="text-muted-foreground">
                    Professional repair of leaking pipes in walls, floors, ceilings, and crawl spaces. 
                    We locate and fix leaks with minimal disruption to your property.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Pipe Replacement</h3>
                  <p className="text-muted-foreground">
                    Replace old, corroded, or damaged pipes with modern materials like copper or PEX. 
                    Improve water quality and pressure throughout your home.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Repiping Services</h3>
                  <p className="text-muted-foreground">
                    Complete home repiping for properties with aging galvanized or polybutylene pipes. 
                    Upgrade your entire plumbing system for long-term reliability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Frozen Pipe Repair</h3>
                  <p className="text-muted-foreground">
                    Expert thawing and repair of frozen pipes. We'll also help prevent future freezing 
                    with proper insulation and protective measures.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Slab Leak Repair</h3>
                  <p className="text-muted-foreground">
                    Specialized repair for leaks under concrete slabs. We use advanced techniques to 
                    access and repair pipes with minimal damage to your foundation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Signs You Need Pipe Repair</h2>
            <p className="text-center text-muted-foreground mb-12">
              Don't wait until a small problem becomes a major disaster. Watch for these warning signs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Water Stains</h3>
                  <p className="text-sm text-muted-foreground">
                    Discoloration on walls, ceilings, or floors indicating hidden leaks.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Low Water Pressure</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduced water flow throughout your home or in specific areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Discolored Water</h3>
                  <p className="text-sm text-muted-foreground">
                    Rusty or brown water indicating corroded pipes that need replacement.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">High Water Bills</h3>
                  <p className="text-sm text-muted-foreground">
                    Unexplained increase in water usage suggesting hidden leaks.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Strange Noises</h3>
                  <p className="text-sm text-muted-foreground">
                    Banging, rattling, or whistling sounds from pipes when water runs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Visible Corrosion</h3>
                  <p className="text-sm text-muted-foreground">
                    Rust, dimpling, or flaking on exposed pipes.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Pipe Repair or Replacement?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for expert pipe services</p>
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

export default PipeRepair;
