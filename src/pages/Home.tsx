import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, Wrench, Droplet, Flame, AlertTriangle, CheckCircle, Clock, Shield, ThumbsUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-plumbing.jpg";
import emergencyImage from "@/assets/emergency-service.jpg";
import drainImage from "@/assets/drain-service.jpg";
import waterHeaterImage from "@/assets/water-heater.jpg";
import waterDamageImage from "@/assets/water-damage.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Professional Plumbing" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Plumbing Experts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Professional care for all your plumbing needs. Available 24/7 for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="emergency" size="lg" asChild>
                <Link to="/contact">
                  <Phone className="mr-2" />
                  Call (555) 123-4567
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <div className="bg-accent border-b">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-accent-foreground">
            <AlertTriangle className="inline-block mr-2 h-5 w-5" />
            <strong>Did You Know?</strong> Water damage restoration costs $2,400 - $4,250 on average. 
            <span className="text-emergency font-semibold ml-2">Don't wait, call us now!</span>
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Quality Plumbing Services. Guaranteed!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Emergency Plumbing"
              description="Our plumbers are waiting to take your emergency calls! Available 24/7 for urgent plumbing issues."
              icon={Wrench}
              link="/services/emergency"
              image={emergencyImage}
            />
            <ServiceCard
              title="Drain Services"
              description="We're on a mission to keep your drains clean and running smoothly with advanced equipment."
              icon={Droplet}
              link="/services/drain"
              image={drainImage}
            />
            <ServiceCard
              title="Water Heater Repair"
              description="We are a name you can trust when it comes to water heater repair, maintenance & replacement."
              icon={Flame}
              link="/services/water-heater"
              image={waterHeaterImage}
            />
            <ServiceCard
              title="Water Damage"
              description="We have the experience and expertise needed for all your water damage restoration problems."
              icon={AlertTriangle}
              link="/services/water-damage"
              image={waterDamageImage}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
              <h3 className="text-xl font-semibold mb-6 text-primary">Dr. Plumbing is a name that can be trusted!</h3>
              <p className="text-muted-foreground mb-8">
                We offer a friendly service with licensed professionals who will provide top quality work at an affordable price. 
                Whether it's a residential or a commercial project, we offer a wide range of services.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Friendly & Professional</h4>
                    <p className="text-sm text-muted-foreground">Expert service with a smile</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Licensed & Insured</h4>
                    <p className="text-sm text-muted-foreground">Fully certified professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ThumbsUp className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Good Reputation</h4>
                    <p className="text-sm text-muted-foreground">Trusted by thousands of customers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Trusted Since 2010</h4>
                    <p className="text-sm text-muted-foreground">Over a decade of excellence</p>
                  </div>
                </div>
              </div>
              <Button variant="hero" size="lg" className="mt-8" asChild>
                <a href="tel:555-123-4567">Call Us Today! (555) 123-4567</a>
              </Button>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional Plumbing Services"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">For All Your Plumbing Needs, We've Got You Covered!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Matt fixed my sink, but he also took the time to explain what was wrong and how I can prevent it in the future. Excellent service!"
                </p>
                <p className="font-semibold">Jerry Robertson</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The Dr. Plumbing techs showed up on time to fix my leaky faucet. They told me exactly what needed to be done, the cost, and timeline. Transparent and professional!"
                </p>
                <p className="font-semibold">Clair Stuart</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "You guys are the absolute best! We love you and will never go anywhere else. Our water heater is like new again thanks to your service!"
                </p>
                <p className="font-semibold">Betsy Davis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Plumbing Services Now?</h2>
          <p className="text-xl mb-8 opacity-90">Our Team of Highly Skilled Plumbers Provides Honest, Dependable Service You Can Trust.</p>
          <Button variant="emergency" size="lg" asChild>
            <a href="tel:555-123-4567">
              <Phone className="mr-2" />
              Call Now! (555) 123-4567
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
