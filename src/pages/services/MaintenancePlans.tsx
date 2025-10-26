import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Calendar, Wrench, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { serviceStructuredData } from "@/data/structuredData";

const MaintenancePlans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Plumbing Maintenance Plans | Dr. Plumbing"
        description="Preventive plumbing maintenance plans with priority service, discounts & annual inspections. Keep your system running smoothly. Call (727) 755-7000!"
        keywords="plumbing maintenance, preventive maintenance, plumbing service plan, plumbing inspection"
        canonicalUrl="https://drplumbing.com/services/maintenance-plans"
        structuredData={serviceStructuredData("Maintenance Plans", "Preventive maintenance to keep your plumbing system running smoothly.")}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Plumbing Maintenance Plans</h1>
            <p className="text-xl opacity-90 mb-8">
              Protect your investment with preventive maintenance that keeps your plumbing running smoothly.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Join Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Prevent Problems Before They Start</h2>
            <p className="text-muted-foreground mb-6 text-center">
              Just like your car needs regular oil changes, your plumbing system needs regular maintenance 
              to prevent costly breakdowns and extend its lifespan. Our maintenance plans provide scheduled 
              inspections, priority service, and peace of mind knowing your plumbing is in top condition.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Prevention</h3>
                <p className="text-sm text-muted-foreground">Catch problems early</p>
              </div>
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Save Money</h3>
                <p className="text-sm text-muted-foreground">Avoid costly repairs</p>
              </div>
              <div className="text-center">
                <Calendar className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Priority Service</h3>
                <p className="text-sm text-muted-foreground">Skip the wait</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Peace of Mind</h3>
                <p className="text-sm text-muted-foreground">Stay protected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Benefits */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Plan Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <Calendar className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Annual Inspections</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Comprehensive annual plumbing system inspection to identify potential problems before 
                    they become emergencies. Includes water heater check, fixture inspection, and drain testing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <Shield className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Priority Scheduling</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Skip the wait with priority scheduling for all service calls. Maintenance plan members 
                    get first access to available appointment slots, even during busy seasons.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <DollarSign className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Service Discounts</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Enjoy exclusive discounts on all repairs and services. Save on parts, labor, and 
                    additional service calls throughout the year - savings that often exceed the plan cost.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <Wrench className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-bold">No Overtime Charges</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Emergency calls after hours? Maintenance plan members receive service without overtime 
                    charges for nights, weekends, and holidays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Extended Warranties</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Enhanced warranty protection on all work performed. Enjoy extended warranty periods 
                    on repairs and installations for added peace of mind.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <Phone className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Priority Support</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Direct access to our priority support line. Speak with a technician faster and get 
                    expert advice when you need it most.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Annual Inspection Includes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Water Heater Inspection</h3>
                  <p className="text-sm text-muted-foreground">
                    Check for leaks, test pressure relief valve, inspect for corrosion
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Fixture Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Test all faucets, toilets, and fixtures for leaks and proper operation
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Drain Performance</h3>
                  <p className="text-sm text-muted-foreground">
                    Check all drains for proper flow and identify slow drains
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Pressure Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Check water pressure and adjust if needed
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Visual Pipe Inspection</h3>
                  <p className="text-sm text-muted-foreground">
                    Examine visible pipes for leaks, corrosion, or damage
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Shut-off Valve Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Test main and fixture shut-off valves for proper operation
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Toilet Inspection</h3>
                  <p className="text-sm text-muted-foreground">
                    Check for leaks, proper flushing, and worn components
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Detailed Report</h3>
                  <p className="text-sm text-muted-foreground">
                    Written report with findings and recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Join a Maintenance Plan?</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Prevent Emergency Breakdowns</h3>
                  <p className="text-muted-foreground">
                    Regular maintenance catches small issues before they become expensive emergencies. A small 
                    leak caught early can prevent thousands in water damage. Worn components can be replaced 
                    before they fail at the worst possible time.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Extend Equipment Life</h3>
                  <p className="text-muted-foreground">
                    Proper maintenance significantly extends the life of your water heater, fixtures, and pipes. 
                    Regular inspection and minor adjustments keep everything running efficiently for years longer.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Lower Utility Bills</h3>
                  <p className="text-muted-foreground">
                    Hidden leaks waste thousands of gallons of water yearly. Running toilets, dripping faucets, 
                    and inefficient water heaters drive up bills. Our inspections find and fix these problems, 
                    saving you money every month.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Protect Your Investment</h3>
                  <p className="text-muted-foreground">
                    Your home is likely your largest investment. Plumbing problems can cause serious structural 
                    damage if left unchecked. Regular maintenance protects your property value and prevents 
                    costly repairs down the road.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today to enroll in a maintenance plan</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="emergency" size="lg" asChild>
              <a href="tel:727-755-7000">
                <Phone className="mr-2" />
                Call (727) 755-7000
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaintenancePlans;
