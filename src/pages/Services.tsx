import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Droplet, Flame, AlertTriangle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import emergencyImage from "@/assets/emergency-service.jpg";
import drainImage from "@/assets/drain-service.jpg";
import waterHeaterImage from "@/assets/water-heater.jpg";
import waterDamageImage from "@/assets/water-damage.jpg";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive plumbing solutions for homes and businesses. Quality service guaranteed!
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              title="Emergency Plumbing Services"
              description="Our plumbers are waiting to take your emergency calls! Available 24/7 for burst pipes, severe leaks, clogged drains, and any urgent plumbing issue that can't wait."
              icon={Wrench}
              link="/services/emergency"
              image={emergencyImage}
            />
            <ServiceCard
              title="Plumbing and Drain Services"
              description="We're on a mission to keep your drains clean and running smoothly! From routine cleaning to advanced camera inspections and trenchless repairs."
              icon={Droplet}
              link="/services/drain"
              image={drainImage}
            />
            <ServiceCard
              title="Water Heater Repair & Replacement"
              description="We are a name you can trust when it comes to your water heater repair, maintenance & replacement. Expert service for all brands and types."
              icon={Flame}
              link="/services/water-heater"
              image={waterHeaterImage}
            />
            <ServiceCard
              title="Water Damage Restoration"
              description="We have the experience and expertise needed for all your water damage problems. Fast response, professional restoration, and complete peace of mind."
              icon={AlertTriangle}
              link="/services/water-damage"
              image={waterDamageImage}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Plumbing Service?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for a free estimate</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="emergency" size="lg" asChild>
              <a href="tel:555-123-4567">
                <Phone className="mr-2" />
                Call (555) 123-4567
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

export default Services;
