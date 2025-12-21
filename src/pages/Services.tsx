import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Droplet, Flame, Filter, Zap, Settings, Phone } from "lucide-react";
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

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Professional Plumbing Services | Dr. Plumbing"
        description="Complete plumbing solutions for your home or business. Emergency repairs, drain cleaning, water heaters, fixtures & more. Licensed experts. Call (727) 755-7000!"
        keywords="plumbing services, emergency plumber, drain cleaning, water heater service, plumbing company"
        canonicalUrl="https://dr.plumbing/services"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Plumbing Services Tampa Bay</h1>
            <p className="text-xl opacity-90">
              Comprehensive plumbing solutions for homes and businesses. Quality service guaranteed!
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              title="Water Treatment & Filtration"
              description="Improve your water quality with our professional water treatment solutions including water softeners, reverse osmosis, and whole house filtration systems."
              icon={Filter}
              link="/services/water-treatment"
              image={waterTreatmentImage}
            />
            <ServiceCard
              title="Gas Line Services"
              description="Licensed gas line installation, repair, and leak detection. Safe, professional service for all your gas appliance and piping needs. Emergency service available."
              icon={Zap}
              link="/services/gas"
              image={gasServiceImage}
            />
            <ServiceCard
              title="Re-Piping Services"
              description="Complete home re-piping with modern copper or PEX piping. Replace old, corroded pipes for improved water quality and pressure. Quality installation guaranteed."
              icon={Settings}
              link="/services/re-pipe"
              image={rePipeImage}
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
              <Link to="/services/fixture-installation" className="p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Fixture Installation</h3>
                <p className="text-muted-foreground">Professional installation of sinks, faucets, toilets, and all plumbing fixtures.</p>
              </Link>
              <Link to="/services/pipe-repair" className="p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Pipe Repair & Replacement</h3>
                <p className="text-muted-foreground">Expert repairs and replacements for damaged or aging pipes.</p>
              </Link>
              <Link to="/services/leak-detection" className="p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Leak Detection</h3>
                <p className="text-muted-foreground">Advanced technology to find and fix hidden leaks before they cause damage.</p>
              </Link>
              <Link to="/services/video-inspection" className="p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Video Inspection</h3>
                <p className="text-muted-foreground">Camera inspections to accurately diagnose drain and pipe issues.</p>
              </Link>
              <Link to="/services/sewer" className="p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Sewer Services</h3>
                <p className="text-muted-foreground">Complete sewer line repair, cleaning, and maintenance services.</p>
              </Link>
              <Link to="/services/maintenance-plans" className="p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Maintenance Plans</h3>
                <p className="text-muted-foreground">Preventive maintenance to keep your plumbing system running smoothly.</p>
              </Link>
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

export default Services;
