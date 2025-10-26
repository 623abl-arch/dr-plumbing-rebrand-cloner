import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { serviceStructuredData } from "@/data/structuredData";
import rePipeImage from "@/assets/re-pipe.jpg";
import { OptimizedImage } from "@/components/OptimizedImage";

const RePipe = () => {
  const features = [
    "Complete home re-piping",
    "Copper pipe replacement",
    "PEX piping installation",
    "Galvanized pipe replacement",
    "Partial re-piping services",
    "Minimal disruption to your home",
    "Quality materials and workmanship",
    "Fast, efficient installation"
  ];

  const structuredData = serviceStructuredData(
    "Re-Piping Services",
    "Professional home re-piping services. Replace old, corroded pipes with modern copper or PEX piping. Quality installation with minimal disruption!"
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Home Re-Piping Service | Dr. Plumbing"
        description="Expert re-piping services for residential properties. Replace old pipes with modern copper or PEX systems. Quality installation guaranteed. Call (727) 755-7000!"
        keywords="re-piping, pipe replacement, copper piping, PEX piping, home re-pipe, galvanized pipe replacement"
        canonicalUrl="https://drplumbing.com/services/re-pipe"
        structuredData={structuredData}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Re-Piping Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Modern pipe replacement for reliable, long-lasting plumbing
            </p>
            <Button variant="emergency" size="lg" asChild>
              <a href="tel:727-755-7000">
                <Phone className="mr-2" />
                Call (727) 755-7000
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Complete Re-Piping Solutions</h2>
                <p className="text-muted-foreground mb-6">
                  Is your home suffering from old, corroded pipes? Low water pressure? Discolored water? It might be time for a complete re-pipe. Our experienced team specializes in replacing outdated plumbing systems with modern, durable materials that will last for decades.
                </p>
                <p className="text-muted-foreground mb-6">
                  We work efficiently to minimize disruption to your daily life while ensuring every pipe is installed to the highest standards. Whether you need copper or PEX piping, we've got you covered.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant">
                <OptimizedImage 
                  src={rePipeImage}
                  alt="Professional re-piping service with modern pipes"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Signs You Need Re-Piping */}
            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Signs You Need Re-Piping</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Discolored or rusty water</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Low water pressure throughout home</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Frequent leaks and repairs</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Pipes are 50+ years old</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Visible corrosion on pipes</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Unpleasant taste or odor in water</span>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Re-Piping Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Improved Quality</h3>
                <p className="text-muted-foreground">Better water pressure and quality throughout your home</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Long-Term Solution</h3>
                <p className="text-muted-foreground">Modern pipes that will last 50+ years without issues</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Increased Value</h3>
                <p className="text-muted-foreground">Boost your home's value with updated plumbing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Re-Pipe Your Home?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for a free estimate</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="emergency" size="lg" asChild>
              <a href="tel:727-755-7000">
                <Phone className="mr-2" />
                Call (727) 755-7000
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RePipe;