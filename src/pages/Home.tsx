import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, Wrench, Droplet, Flame, AlertTriangle, CheckCircle, Clock, Shield, ThumbsUp, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { SEO } from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { localBusinessStructuredData } from "@/data/structuredData";
import heroImage from "@/assets/hero-plumbing.jpg";
import emergencyImage from "@/assets/emergency-service.jpg";
import drainImage from "@/assets/drain-service.jpg";
import waterHeaterImage from "@/assets/water-heater.jpg";
import waterDamageImage from "@/assets/water-damage.jpg";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const reviews = [
    {
      text: "Matt fixed my sink, but he also took the time to explain what was wrong and how I can prevent it in the future. Excellent service!",
      author: "Jerry Robertson",
      rating: 5
    },
    {
      text: "The Dr. Plumbing techs showed up on time to fix my leaky faucet. They told me exactly what needed to be done, the cost, and timeline. Transparent and professional!",
      author: "Clair Stuart",
      rating: 5
    },
    {
      text: "You guys are the absolute best! We love you and will never go anywhere else. Our water heater is like new again thanks to your service!",
      author: "Betsy Davis",
      rating: 5
    },
    {
      text: "Fast response time and professional service. They fixed our emergency pipe burst at 2 AM. Highly recommend!",
      author: "Michael Chen",
      rating: 5
    },
    {
      text: "Great experience from start to finish. Fair pricing, quality work, and friendly technicians. Will definitely use them again.",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      text: "They saved our basement from flooding! Quick response and thorough work. Can't thank them enough.",
      author: "David Martinez",
      rating: 5
    },
    {
      text: "Professional, courteous, and efficient. Fixed our drain issue and gave us tips to prevent future problems.",
      author: "Emily Wilson",
      rating: 5
    },
    {
      text: "Best plumbing service I've ever used. They replaced our old water heater and the price was very reasonable.",
      author: "Robert Thompson",
      rating: 5
    }
  ];

  const GoogleIcon = () => (
    <svg className="w-5 h-5 opacity-60" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Dr. Plumbing | Expert Plumbing Services 24/7 | Licensed & Insured"
        description="Dr. Plumbing provides professional plumbing services including emergency repairs, drain cleaning, water heater service, and water damage restoration. Available 24/7. Call (555) 123-4567."
        keywords="plumbing services, emergency plumber, drain cleaning, water heater repair, water damage restoration, licensed plumber, 24/7 plumbing"
        canonicalUrl="https://drplumbing.com/"
        structuredData={localBusinessStructuredData}
      />
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
                <a href="tel:555-123-4567">
                  <Phone className="mr-2" />
                  Call (555) 123-4567
                </a>
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
              <OptimizedImage
                src={heroImage}
                alt="Professional plumbing services by licensed technicians"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Google Reviews */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground mb-6">For All Your Plumbing Needs, We've Got You Covered!</p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-center gap-2 bg-card p-3 rounded-lg shadow-sm border">
                <svg className="w-6 h-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                  <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/>
                  <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                </svg>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-lg">4.9</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Google Rating</p>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href="https://g.page/r/CV0NtCTnM37dEBE/review" target="_blank" rel="noopener noreferrer">
                View all reviews on Google
              </a>
            </Button>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0">
                    <Card className="border-l-4 border-l-primary h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-lg">★</span>
                            ))}
                          </div>
                          <GoogleIcon />
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          "{review.text}"
                        </p>
                        <div>
                          <p className="font-semibold text-foreground">{review.author}</p>
                          <p className="text-xs text-muted-foreground">Posted on Google</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full shadow-lg transition-opacity ${!canScrollPrev ? 'opacity-50 cursor-not-allowed' : 'hover-scale'}`}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full shadow-lg transition-opacity ${!canScrollNext ? 'opacity-50 cursor-not-allowed' : 'hover-scale'}`}
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
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
