import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Wrench, Video, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { serviceStructuredData } from "@/data/structuredData";

const SewerServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Sewer Line Service | Dr. Plumbing"
        description="Complete sewer line repair, cleaning & maintenance. Trenchless & traditional methods available. Camera inspection included. Call (727) 755-7000 now!"
        keywords="sewer repair, sewer line cleaning, sewer replacement, trenchless sewer repair, sewer camera inspection"
        canonicalUrl="https://dr.plumbing/services/sewer"
        structuredData={serviceStructuredData("Sewer Services", "Complete sewer line repair, cleaning, and maintenance services.")}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sewer Line Repair & Cleaning Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Complete sewer line repair, cleaning, and maintenance for homes and businesses.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Expert Sewer Solutions</h2>
            <p className="text-muted-foreground mb-6 text-center">
              Your sewer line is one of the most critical components of your plumbing system. When problems 
              arise, they can cause serious damage and health hazards. Dr. Plumbing provides comprehensive 
              sewer services including cleaning, camera inspection, repair, and replacement using both 
              traditional and modern trenchless methods.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Wrench className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Repairs</h3>
                <p className="text-sm text-muted-foreground">Traditional & trenchless options</p>
              </div>
              <div className="text-center">
                <Video className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Camera Inspection</h3>
                <p className="text-sm text-muted-foreground">See inside your sewer lines</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Guaranteed Work</h3>
                <p className="text-sm text-muted-foreground">Quality service you can trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Sewer Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Sewer Line Cleaning</h3>
                  <p className="text-muted-foreground">
                    Professional cleaning using hydro jetting and mechanical snaking to clear blockages, 
                    remove roots, and restore proper flow in your sewer lines.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Video Camera Inspection</h3>
                  <p className="text-muted-foreground">
                    High-definition camera inspection to accurately diagnose sewer line problems without 
                    excavation. See cracks, blockages, and root intrusion.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Trenchless Repair</h3>
                  <p className="text-muted-foreground">
                    Modern pipe lining and pipe bursting technology repairs sewer lines with minimal 
                    digging - saving your landscaping and reducing costs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Sewer Line Replacement</h3>
                  <p className="text-muted-foreground">
                    Complete sewer line replacement for severely damaged or collapsed lines. Traditional 
                    excavation and trenchless options available.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Root Removal</h3>
                  <p className="text-muted-foreground">
                    Specialized equipment to cut and remove tree roots that have invaded your sewer line, 
                    plus preventive treatment options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Emergency Service</h3>
                  <p className="text-muted-foreground">
                    24/7 emergency response for sewer backups and urgent sewer line problems. Fast, 
                    reliable service when you need it most.
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
            <h2 className="text-3xl font-bold mb-6 text-center">Signs of Sewer Line Problems</h2>
            <p className="text-center text-muted-foreground mb-12">
              Don't ignore these warning signs of sewer line issues:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Multiple Drain Clogs</h3>
                  <p className="text-sm text-muted-foreground">
                    Several drains backing up at once indicates a main sewer line problem.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Sewage Odors</h3>
                  <p className="text-sm text-muted-foreground">
                    Foul smells from drains or yard indicate sewer gas escaping from damaged pipes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Slow Drains</h3>
                  <p className="text-sm text-muted-foreground">
                    Consistently slow drains throughout the house suggest sewer line blockage.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Gurgling Sounds</h3>
                  <p className="text-sm text-muted-foreground">
                    Bubbling or gurgling from drains when others are used indicates venting issues.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Wet Spots in Yard</h3>
                  <p className="text-sm text-muted-foreground">
                    Unexplained soggy areas or lush grass patches may indicate a sewer leak.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Foundation Cracks</h3>
                  <p className="text-sm text-muted-foreground">
                    Sewer leaks can erode soil under foundations causing settling and cracks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trenchless vs Traditional */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Repair Method Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Trenchless Repair</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Minimal excavation required</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Preserves landscaping and hardscaping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Faster completion time</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Often more cost-effective</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Long-lasting seamless liner</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Traditional Repair</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Direct access to damaged section</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Complete pipe replacement option</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Best for severely collapsed pipes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Opportunity to upgrade pipe size</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Time-tested repair method</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sewer Line Problems?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us for expert sewer services</p>
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

export default SewerServices;
