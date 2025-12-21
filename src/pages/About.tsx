import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Award, Users, Clock, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import heroImage from "@/assets/hero-plumbing.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Dr. Plumbing | Licensed Since 2010"
        description="Trusted Tampa Bay plumber since 2010. Licensed, insured, and delivering professional plumbing services with integrity. Your local experts you can count on."
        keywords="about plumbing company, licensed plumber, insured plumber, professional plumbing team"
        canonicalUrl="https://dr.plumbing/about"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Licensed Plumber Serving Tampa Bay Since 2010</h1>
            <p className="text-xl opacity-90">
              Your trusted plumbing experts since 2010, delivering professional care for homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2010, Dr. Plumbing has been providing expert plumbing services to our community for over a decade. 
                Our commitment to excellence and customer satisfaction has made us one of the most trusted names in the industry.
              </p>
              <p className="text-muted-foreground mb-4">
                We started with a simple mission: to provide professional, reliable plumbing services at fair prices. 
                Today, we continue that mission while serving thousands of satisfied customers across residential and commercial sectors.
              </p>
              <p className="text-muted-foreground">
                Our team of licensed and insured professionals brings decades of combined experience to every job, 
                ensuring your plumbing issues are resolved correctly the first time.
              </p>
            </div>
            <div>
              <OptimizedImage
                src={heroImage}
                alt="Dr. Plumbing professional team of licensed plumbers"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Dr. Plumbing?</h2>
            <p className="text-xl text-muted-foreground">Our commitment to excellence sets us apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent mb-4">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Licensed & Insured</h3>
                <p className="text-muted-foreground">
                  Fully certified professionals you can trust with complete peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent mb-4">
                  <Award className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Service</h3>
                <p className="text-muted-foreground">
                  Decades of combined experience solving even the toughest plumbing challenges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent mb-4">
                  <Clock className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Emergency</h3>
                <p className="text-muted-foreground">
                  Available around the clock for your urgent plumbing emergencies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent mb-4">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer First</h3>
                <p className="text-muted-foreground">
                  Friendly, professional service that puts your satisfaction above all else.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Serving Your Community</h2>
            <p className="text-muted-foreground mb-8">
              We proudly serve residential and commercial customers throughout the region. 
              Whether you need routine maintenance or emergency repairs, our team is ready to help.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-accent rounded-lg">
                <p className="font-semibold text-accent-foreground">Residential</p>
              </div>
              <div className="p-4 bg-accent rounded-lg">
                <p className="font-semibold text-accent-foreground">Commercial</p>
              </div>
              <div className="p-4 bg-accent rounded-lg">
                <p className="font-semibold text-accent-foreground">Industrial</p>
              </div>
              <div className="p-4 bg-accent rounded-lg">
                <p className="font-semibold text-accent-foreground">Emergency</p>
              </div>
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Dr. Plumbing Difference?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for all your plumbing needs</p>
          <Button variant="emergency" size="lg" asChild>
            <a href="tel:727-755-7000">
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

export default About;
