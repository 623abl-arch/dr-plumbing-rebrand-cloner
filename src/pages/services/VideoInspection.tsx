import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Video, Eye, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { serviceStructuredData } from "@/data/structuredData";

const VideoInspection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Video Pipe Inspection Services | Dr. Plumbing"
        description="HD camera pipe inspections diagnose drain & sewer issues without digging. See inside your pipes for accurate repairs. Call (727) 755-7000 today!"
        keywords="video pipe inspection, camera inspection, sewer camera, drain inspection, pipe camera"
        canonicalUrl="https://drplumbing.com/services/video-inspection"
        structuredData={serviceStructuredData("Video Inspection", "Camera inspections to accurately diagnose drain and pipe issues.")}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Video Pipe Inspection Services</h1>
            <p className="text-xl opacity-90 mb-8">
              See exactly what's happening inside your pipes with high-definition camera technology.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Inspection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">See Inside Your Pipes</h2>
            <p className="text-muted-foreground mb-6 text-center">
              Our state-of-the-art video inspection cameras allow us to see exactly what's happening inside 
              your drains, sewer lines, and pipes. No more guesswork - we can accurately diagnose problems, 
              locate blockages, identify damage, and plan the most effective repairs without invasive digging.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Camera className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">HD Camera Technology</h3>
                <p className="text-sm text-muted-foreground">Crystal clear video of pipe interiors</p>
              </div>
              <div className="text-center">
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Accurate Diagnosis</h3>
                <p className="text-sm text-muted-foreground">See problems before making repairs</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Non-Invasive</h3>
                <p className="text-sm text-muted-foreground">No digging or demolition required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Find */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What Video Inspection Reveals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Blockages & Clogs</h3>
                  <p className="text-muted-foreground">
                    Identify the exact location and cause of drain blockages - grease buildup, tree roots, 
                    debris accumulation, or foreign objects stuck in pipes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Pipe Damage</h3>
                  <p className="text-muted-foreground">
                    Locate cracks, breaks, corrosion, and collapsed sections of pipe that need repair 
                    or replacement before they cause major problems.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Tree Root Intrusion</h3>
                  <p className="text-muted-foreground">
                    See where tree roots have penetrated sewer lines and caused blockages or damage. 
                    Plan targeted root removal or pipe repair.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Pipe Alignment Issues</h3>
                  <p className="text-muted-foreground">
                    Detect sagging pipes, bellied sections, or misaligned joints that can trap debris 
                    and cause recurring drainage problems.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Pre-Purchase Inspections</h3>
                  <p className="text-muted-foreground">
                    Inspect sewer lines before buying a home to identify existing problems and avoid 
                    expensive surprises after closing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Verify Repairs</h3>
                  <p className="text-muted-foreground">
                    Document the condition of pipes before and after repairs to ensure work was 
                    completed properly and problems are resolved.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">How Video Inspection Works</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Camera Insertion</h3>
                  <p className="text-muted-foreground">
                    A flexible cable with a high-resolution camera is inserted into the pipe through an 
                    existing access point like a cleanout or drain opening.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Real-Time Video</h3>
                  <p className="text-muted-foreground">
                    The camera transmits live video to a monitor where our technician can examine the 
                    interior condition of your pipes in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Problem Identification</h3>
                  <p className="text-muted-foreground">
                    We identify problems, measure their distance from entry point, and record video 
                    evidence for your records and insurance claims if needed.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Expert Recommendations</h3>
                  <p className="text-muted-foreground">
                    Based on what we find, we provide detailed recommendations for repairs or maintenance 
                    to resolve issues and prevent future problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Benefits of Video Inspection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Accurate Diagnosis</h3>
                  <p className="text-sm text-muted-foreground">
                    No guesswork - see the actual problem before planning repairs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Cost Savings</h3>
                  <p className="text-sm text-muted-foreground">
                    Avoid unnecessary excavation and target repairs precisely where needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Minimal Disruption</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick inspection process with no damage to your property.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Video Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Recorded evidence for insurance claims and property records.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Pipe Inspection?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us for professional video inspection services</p>
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

export default VideoInspection;
