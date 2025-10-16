import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import emergencyImage from "@/assets/emergency-service.jpg";

const Emergency = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">24/7 Emergency Plumbing Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Fast response when you need it most. Our plumbers are standing by to handle your emergency!
            </p>
            <Button variant="emergency" size="lg" asChild>
              <a href="tel:555-123-4567">
                <Phone className="mr-2" />
                Call Now: (555) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={emergencyImage}
                alt="Emergency Plumbing Service"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">We're Here When You Need Us Most</h2>
              <p className="text-muted-foreground mb-6">
                Plumbing emergencies don't wait for business hours. That's why Dr. Plumbing offers 24/7 emergency 
                service to handle your urgent plumbing issues. Our experienced team responds quickly to minimize 
                damage and restore your peace of mind.
              </p>
              <p className="text-muted-foreground mb-6">
                With fully stocked vehicles and advanced equipment, we're prepared to handle any emergency on the spot.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Fast Response Time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Licensed & Insured Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Available 24/7/365</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Emergencies */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Common Plumbing Emergencies We Handle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Burst Pipes</h3>
                  <p className="text-muted-foreground">
                    Immediate repair and water shut-off to prevent extensive damage to your property.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Severe Leaks</h3>
                  <p className="text-muted-foreground">
                    Quick leak detection and repair before it causes structural damage or mold growth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Blocked Drains & Sewers</h3>
                  <p className="text-muted-foreground">
                    Professional clearing of severe blockages causing backups and overflows.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Water Heater Failures</h3>
                  <p className="text-muted-foreground">
                    Emergency repairs or replacement when you've lost hot water completely.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Overflowing Toilets</h3>
                  <p className="text-muted-foreground">
                    Fast response to stop flooding and resolve the underlying issue.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Gas Leaks</h3>
                  <p className="text-muted-foreground">
                    Immediate response to dangerous gas leaks for your safety and security.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Dr. Plumbing for Emergencies?</h2>
            <p className="text-muted-foreground mb-12">
              When disaster strikes, you need a plumbing company you can trust to respond quickly and get the job done right.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <h3 className="font-semibold mb-2">Always Available</h3>
                <p className="text-sm text-muted-foreground">Round-the-clock service every day of the year</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">&lt;60min</div>
                <h3 className="font-semibold mb-2">Rapid Response</h3>
                <p className="text-sm text-muted-foreground">Average arrival time for emergency calls</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-sm text-muted-foreground">We stand behind our emergency work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Plumbing Emergency?</h2>
          <p className="text-xl mb-8 opacity-90">Don't wait - call us now for immediate assistance!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="emergency" size="lg" asChild>
              <a href="tel:555-123-4567">
                <Phone className="mr-2" />
                Emergency: (555) 123-4567
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Emergency;
