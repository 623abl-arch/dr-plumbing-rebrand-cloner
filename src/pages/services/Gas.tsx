import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { serviceStructuredData } from "@/data/structuredData";
import gasServiceImage from "@/assets/gas-service.jpg";
import { OptimizedImage } from "@/components/OptimizedImage";

const Gas = () => {
  const features = [
    "Gas line installation & repair",
    "Gas leak detection & repair",
    "Gas appliance hookups",
    "Gas line pressure testing",
    "Gas pipe replacement",
    "Gas water heater installation",
    "Gas fireplace installation",
    "Emergency gas service available"
  ];

  const structuredData = serviceStructuredData(
    "Gas Line Services",
    "Professional gas line installation, repair, and leak detection services. Licensed gas plumbers ensuring your safety. Available 24/7 for emergencies!"
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Gas Line Service | Dr. Plumbing"
        description="Expert gas line installation, repair & leak detection. Licensed gas plumbers for all appliances & piping needs. Safe service. Call (727) 755-7000 today!"
        keywords="gas line repair, gas line installation, gas leak detection, gas plumber, gas appliance installation"
        canonicalUrl="https://drplumbing.com/services/gas"
        structuredData={structuredData}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gas Line Installation & Repair Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Safe, professional gas line installation and repair services
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
                <h2 className="text-3xl font-bold mb-6">Licensed Gas Line Experts</h2>
                <p className="text-muted-foreground mb-6">
                  When it comes to gas line work, safety and expertise are paramount. Our licensed and certified gas plumbers have the knowledge and experience to handle all your gas line needs, from new installations to emergency leak repairs.
                </p>
                <p className="text-muted-foreground mb-6">
                  Whether you're installing a new gas appliance, need a gas line repair, or suspect a gas leak, our team is ready to respond quickly and safely to protect your home and family.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant">
                <OptimizedImage 
                  src={gasServiceImage}
                  alt="Professional gas line installation and repair service"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Services List */}
            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Gas Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Notice */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold mb-3 text-destructive">Gas Leak? Call Immediately!</h3>
              <p className="text-muted-foreground mb-4">
                If you smell gas or suspect a gas leak, evacuate the area immediately and call us right away. Do not use any electrical switches, create sparks, or light matches. Our emergency gas leak response team is available 24/7.
              </p>
              <Button variant="destructive" size="lg" asChild>
                <a href="tel:727-755-7000">
                  <Phone className="mr-2" />
                  Emergency: (727) 755-7000
                </a>
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Licensed & Certified</h3>
                <p className="text-muted-foreground">All our gas technicians are fully licensed and certified</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Safety First</h3>
                <p className="text-muted-foreground">We follow strict safety protocols for every gas service</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">24/7 Emergency</h3>
                <p className="text-muted-foreground">Emergency gas leak service available around the clock</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Gas Line Service?</h2>
          <p className="text-xl mb-8 opacity-90">Contact our licensed gas experts today</p>
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

export default Gas;