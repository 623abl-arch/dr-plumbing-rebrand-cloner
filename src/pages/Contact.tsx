import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    // Load Jobber script
    const script = document.createElement('script');
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    script.setAttribute('clienthub_id', 'a0b6124c-0b73-4561-a68a-90eb220c3719-331256');
    script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/a0b6124c-0b73-4561-a68a-90eb220c3719/public/work_request/embedded_work_request_form?form_id=331256');
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div className="min-h-screen flex flex-col">
      <SEO title="Contact Dr. Plumbing | Free Estimate" description="Get your free plumbing estimate today! Available 24/7 for emergencies. Call (727) 755-7000 or complete our contact form for fast, reliable service." keywords="contact plumber, plumbing estimate, plumbing quote, emergency plumber contact" canonicalUrl="https://dr.plumbing/contact" />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Tampa Bay's Trusted Plumber</h1>
            <p className="text-xl opacity-90">
              Get in touch with our expert team. We're here to help 24/7!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Schedule Service</h2>
                <div id="a0b6124c-0b73-4561-a68a-90eb220c3719-331256"></div>

                <div className="mt-6 border-t pt-4 text-center text-xs text-muted-foreground">
                  <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">Privacy Policy</Link>
                  <span className="mx-2">•</span>
                  <Link to="/terms-and-conditions" className="text-primary underline hover:text-primary/80">Terms & Conditions</Link>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions or need immediate assistance? Contact us using any of the methods below.
                </p>
              </div>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:727-755-7000" className="text-primary hover:underline text-lg font-bold">
                        (727) 755-7000
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">24/7 Emergency Service</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Text</h3>
                      <a href="sms:+17277557000" className="text-primary hover:underline text-lg font-bold">
                        (727) 755-7000
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Quick response via text</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:help@dr.plumbing" className="text-primary hover:underline">help@dr.plumbing</a>
                      <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        140 Island Way 196<br />
                        Clearwater, FL 33767
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Mon - Fri: 8:00 AM - 5:00 PM<br />
                        Sat - Sun: Closed<br />
                        <span className="text-emergency font-semibold">24/7 Emergency Service</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-emergency text-emergency-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Emergency? Call Now!</h3>
                  <p className="mb-4 opacity-90">We're available 24/7 for urgent plumbing issues</p>
                  <Button variant="secondary" size="lg" asChild className="w-full">
                    <a href="tel:727-755-7000" className="font-bold">
                      <Phone className="mr-2" />
                      (727) 755-7000
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;