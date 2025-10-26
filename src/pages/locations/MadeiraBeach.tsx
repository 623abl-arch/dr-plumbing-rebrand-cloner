import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MapPin, Wrench, Droplet, Flame, Filter, Fuel, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { SEO } from "@/components/SEO";
import emergencyImage from "@/assets/emergency-service.jpg";
import drainImage from "@/assets/drain-service.jpg";
import waterHeaterImage from "@/assets/water-heater.jpg";
import waterTreatmentImage from "@/assets/water-treatment.jpg";
import gasServiceImage from "@/assets/gas-service.jpg";
import rePipeImage from "@/assets/re-pipe.jpg";

const MadeiraBeach = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Madeira Beach Plumber | Dr. Plumbing Services | 24/7 Emergency"
        description="Expert plumbing services in Madeira Beach, FL. Available 24/7 for emergency repairs, drain cleaning, water heater service. Licensed & insured. Call (727) 755-7000."
        keywords="Madeira Beach plumber, plumbing services Madeira Beach FL, emergency plumber Madeira Beach"
        canonicalUrl="https://drplumbing.com/locations/madeira-beach"
      />
      <Navbar />
      
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6" />
              <h1 className="text-4xl md:text-5xl font-bold">Plumbing Services in Madeira Beach</h1>
            </div>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Your trusted local plumber serving Madeira Beach and surrounding areas. Available 24/7 for emergencies.
            </p>
            <Button variant="emergency" size="lg" asChild>
              <a href="tel:727-755-7000" className="font-bold">
                <Phone className="mr-2" />
                Call (727) 755-7000
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Madeira Beach Plumbing Services</h2>
            <p className="text-xl text-muted-foreground">Professional Plumbing Solutions for Your Home or Business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ServiceCard
              title="Emergency Plumbing"
              description="24/7 emergency plumbing services for urgent issues in Madeira Beach."
              icon={Wrench}
              link="/services/emergency"
              image={emergencyImage}
            />
            <ServiceCard
              title="Drain Services"
              description="Professional drain cleaning and repair services."
              icon={Droplet}
              link="/services/drain"
              image={drainImage}
            />
            <ServiceCard
              title="Water Heater Repair"
              description="Water heater repair, maintenance, and replacement."
              icon={Flame}
              link="/services/water-heater"
              image={waterHeaterImage}
            />
            <ServiceCard
              title="Water Treatment"
              description="Improve your water quality with professional water treatment solutions."
              icon={Filter}
              link="/services/water-treatment"
              image={waterTreatmentImage}
            />
            <ServiceCard
              title="Gas Line Services"
              description="Licensed gas line installation, repair, and leak detection services."
              icon={Fuel}
              link="/services/gas"
              image={gasServiceImage}
            />
            <ServiceCard
              title="Re-Pipe Services"
              description="Complete re-piping services to replace old, corroded pipes."
              icon={Settings}
              link="/services/re-pipe"
              image={rePipeImage}
            />
          </div>

          <div className="max-w-3xl mx-auto prose prose-lg">
            <h3 className="text-2xl font-bold mb-4">Why Choose Dr. Plumbing in Madeira Beach?</h3>
            <p className="text-muted-foreground mb-4">
              As a local, family-owned business, we understand the unique plumbing needs of Madeira Beach residents. 
              Our licensed and insured plumbers provide fast, reliable service with upfront pricing and guaranteed workmanship.
            </p>
            <p className="text-muted-foreground">
              Whether you need emergency repairs, routine maintenance, or a complete plumbing installation, 
              we're here to help. Call us today at (727) 755-7000 for expert plumbing services in Madeira Beach.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Fixture Installation</h3>
                <p className="text-muted-foreground">Professional installation of sinks, faucets, toilets, and all plumbing fixtures.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Pipe Repair & Replacement</h3>
                <p className="text-muted-foreground">Expert repairs and replacements for damaged or aging pipes.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Leak Detection</h3>
                <p className="text-muted-foreground">Advanced technology to find and fix hidden leaks before they cause damage.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Video Inspection</h3>
                <p className="text-muted-foreground">Camera inspections to accurately diagnose drain and pipe issues.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Sewer Services</h3>
                <p className="text-muted-foreground">Complete sewer line repair, cleaning, and maintenance services.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Maintenance Plans</h3>
                <p className="text-muted-foreground">Preventive maintenance to keep your plumbing system running smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Plumber in Madeira Beach?</h2>
          <p className="text-xl mb-8 opacity-90">Call Dr. Plumbing for fast, professional service.</p>
          <Button variant="emergency" size="lg" asChild>
            <a href="tel:727-755-7000" className="font-bold">
              <Phone className="mr-2" />
              Call Now! (727) 755-7000
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MadeiraBeach;
