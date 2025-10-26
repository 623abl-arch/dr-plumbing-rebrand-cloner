import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { serviceStructuredData } from "@/data/structuredData";
import waterTreatmentImage from "@/assets/water-treatment.jpg";
import { OptimizedImage } from "@/components/OptimizedImage";

const WaterTreatment = () => {
  const features = [
    "Water softener installation & maintenance",
    "Reverse osmosis systems",
    "Whole house filtration systems",
    "Water quality testing",
    "Iron and sulfur removal",
    "UV disinfection systems",
    "Chemical-free water treatment",
    "Water conditioner service"
  ];

  const structuredData = serviceStructuredData(
    "Water Treatment Services",
    "Professional water treatment solutions including water softeners, filtration systems, and water quality testing. Improve your water quality today!"
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Water Treatment & Filtration Services | Dr. Plumbing"
        description="Expert water treatment services including water softeners, reverse osmosis, and whole house filtration systems. Improve your water quality. Call (727) 755-7000!"
        keywords="water treatment, water softener, water filtration, reverse osmosis, water quality"
        canonicalUrl="https://drplumbing.com/services/water-treatment"
        structuredData={structuredData}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Water Treatment Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Clean, safe, and great-tasting water for your home
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
                <h2 className="text-3xl font-bold mb-6">Professional Water Treatment Solutions</h2>
                <p className="text-muted-foreground mb-6">
                  Experience the difference that clean, treated water can make in your home. Our water treatment experts install and maintain advanced filtration and softening systems that remove contaminants, reduce hardness, and improve the taste and quality of your water.
                </p>
                <p className="text-muted-foreground mb-6">
                  From water softeners to reverse osmosis systems, we provide comprehensive water treatment solutions tailored to your specific needs and water quality concerns.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant">
                <OptimizedImage 
                  src={waterTreatmentImage}
                  alt="Professional water treatment system installation"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Services List */}
            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Water Treatment Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Better Health</h3>
                <p className="text-muted-foreground">Remove contaminants and impurities for safer, healthier water</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Cost Savings</h3>
                <p className="text-muted-foreground">Reduce scale buildup and extend the life of your appliances</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">Better Taste</h3>
                <p className="text-muted-foreground">Enjoy cleaner, better-tasting water throughout your home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Better Water Quality?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for a free water quality assessment</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="emergency" size="lg" asChild>
              <a href="tel:727-755-7000">
                <Phone className="mr-2" />
                Call (727) 755-7000
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WaterTreatment;