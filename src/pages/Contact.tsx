import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const SERVICE_OPTIONS = [
  "Emergency Plumbing",
  "Drain Services",
  "Water Heater",
  "Pipe Repair",
  "Leak Detection",
  "Sewer Services",
  "Gas Line Services",
  "Re-Piping",
  "Fixture Installation",
  "Video Inspection",
  "Water Treatment",
  "Maintenance Plan",
  "Other / Not Sure",
];

const BEST_TIME_OPTIONS = [
  "Morning (8am-12pm)",
  "Afternoon (12pm-5pm)",
  "Evening (5pm-8pm)",
  "Anytime",
];

const CONSENT_DISCLOSURE =
  "I agree to receive transactional SMS messages from Dr. Plumbing, Inc. d.b.a. Signature Construction Group, including appointment reminders, service confirmations, technician dispatch notifications, and scheduling updates. Message frequency varies (typically 1–5 messages per month). Message and data rates may apply. Reply HELP for help, STOP to cancel. By checking this box, I confirm I have read and agree to the Privacy Policy and SMS Terms.";

const FAKE_PHONES = new Set([
  "1234567890",
  "0987654321",
  "0000000000",
  "1111111111",
  "2222222222",
  "3333333333",
  "4444444444",
  "5555555555",
  "6666666666",
  "7777777777",
  "8888888888",
  "9999999999",
]);

const SUBMIT_COOLDOWN_MS = 3000;

const formatPhone = (raw: string) => {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

const Required = () => <span className="text-destructive ml-0.5">*</span>;

const Contact = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    service_needed: "",
    description: "",
    contact_method: "",
    best_time: "",
    company_url: "", // honeypot (renamed from `website` to evade bot heuristics)
  });
  const [transactionalConsent, setTransactionalConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const phoneDigits = form.phone.replace(/\D/g, "");
  const phoneValid =
    phoneDigits.length === 10 && !FAKE_PHONES.has(phoneDigits);
  const zipValid = /^\d{5}$/.test(form.zip);

  const requiredFilled = useMemo(() => {
    return (
      form.first_name.trim() &&
      form.last_name.trim() &&
      form.email.trim() &&
      phoneValid &&
      form.address.trim() &&
      form.city.trim() &&
      zipValid &&
      form.service_needed &&
      form.description.trim() &&
      form.contact_method
    );
  }, [form, phoneValid, zipValid]);

  const canSubmit =
    !!requiredFilled &&
    transactionalConsent &&
    !isSubmitting &&
    !cooldown;

  const update = <K extends keyof typeof form>(key: K, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    update("phone", formatted);
    const digits = formatted.replace(/\D/g, "");
    if (digits.length === 0) {
      setPhoneError(null);
    } else if (digits.length !== 10) {
      setPhoneError("Phone must be 10 digits");
    } else if (FAKE_PHONES.has(digits)) {
      setPhoneError("Please enter a valid phone number");
    } else {
      setPhoneError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    // Cross-validation: Text preferred contact requires transactional SMS consent
    if (form.contact_method === "Text" && !transactionalConsent) {
      setErrorMsg(
        "You selected 'Text' as your preferred contact method. Please check the transactional SMS consent box so we can text you.",
      );
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);
    setCooldown(true);
    // Always release cooldown after 3s, regardless of result
    setTimeout(() => setCooldown(false), SUBMIT_COOLDOWN_MS);

    try {
      const { company_url, ...formFields } = form;
      const { data, error } = await supabase.functions.invoke("contact-lead", {
        body: {
          ...formFields,
          company_url, // honeypot
          transactional_consent: true,
          marketing_consent: marketingConsent,
          consent_disclosure: CONSENT_DISCLOSURE,
          submission_url:
            typeof window !== "undefined"
              ? window.location.href
              : "unknown",
        },
      });

      if (error) throw error;
      if (!data?.ok) throw new Error("Submission failed");

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setErrorMsg(
        "Something went wrong. Please call (727) 755-7000 or try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact Dr. Plumbing | Free Estimate"
        description="Get your free plumbing estimate today! Available 24/7 for emergencies. Call (727) 755-7000 or complete our contact form for fast, reliable service."
        keywords="contact plumber, plumbing estimate, plumbing quote, emergency plumber contact"
        canonicalUrl="https://dr.plumbing/contact1"
        noindex
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Tampa Bay's Trusted Plumber
            </h1>
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
                <h2 className="text-2xl font-bold mb-1">Schedule Service</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Request a free estimate or schedule a visit.
                </p>

                {submitted ? (
                  <div className="rounded-md border border-primary/20 bg-primary/5 p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Thanks!</h3>
                    <p className="text-muted-foreground">
                      We've received your request and will contact you shortly.
                      For emergencies, please call{" "}
                      <a
                        href="tel:727-755-7000"
                        className="text-primary font-bold hover:underline"
                      >
                        (727) 755-7000
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* Honeypot — hidden from real users (named to evade bot heuristics) */}
                    <input
                      type="text"
                      name="company_url"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={form.company_url}
                      onChange={(e) => update("company_url", e.target.value)}
                      style={{
                        position: "absolute",
                        left: "-10000px",
                        width: "1px",
                        height: "1px",
                        opacity: 0,
                      }}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="first_name">
                          First Name<Required />
                        </Label>
                        <Input
                          id="first_name"
                          required
                          value={form.first_name}
                          onChange={(e) => update("first_name", e.target.value)}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="last_name">
                          Last Name<Required />
                        </Label>
                        <Input
                          id="last_name"
                          required
                          value={form.last_name}
                          onChange={(e) => update("last_name", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email">
                        Email<Required />
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="phone">
                        Phone<Required />
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="(___) ___-____"
                        value={form.phone}
                        onChange={handlePhoneChange}
                        aria-invalid={!!phoneError}
                      />
                      {phoneError && (
                        <p className="text-xs text-destructive">{phoneError}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="address">
                        Service Address<Required />
                      </Label>
                      <Input
                        id="address"
                        required
                        placeholder="Street address"
                        value={form.address}
                        onChange={(e) => update("address", e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="city">
                          City<Required />
                        </Label>
                        <Input
                          id="city"
                          required
                          value={form.city}
                          onChange={(e) => update("city", e.target.value)}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="zip">
                          ZIP Code<Required />
                        </Label>
                        <Input
                          id="zip"
                          required
                          inputMode="numeric"
                          maxLength={5}
                          placeholder="33755"
                          value={form.zip}
                          onChange={(e) =>
                            update("zip", e.target.value.replace(/\D/g, ""))
                          }
                          aria-invalid={form.zip.length > 0 && !zipValid}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="service_needed">
                        Service Needed<Required />
                      </Label>
                      <Select
                        value={form.service_needed}
                        onValueChange={(v) => update("service_needed", v)}
                      >
                        <SelectTrigger id="service_needed">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="description">
                        How can we help you?<Required />
                      </Label>
                      <Textarea
                        id="description"
                        required
                        rows={4}
                        placeholder="Describe the issue or service needed..."
                        value={form.description}
                        onChange={(e) => update("description", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>
                        Preferred Contact Method<Required />
                      </Label>
                      <RadioGroup
                        value={form.contact_method}
                        onValueChange={(v) => update("contact_method", v)}
                        className="flex flex-wrap gap-4"
                      >
                        {["Phone Call", "Text", "Email"].map((opt) => (
                          <div
                            key={opt}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem value={opt} id={`cm-${opt}`} />
                            <Label
                              htmlFor={`cm-${opt}`}
                              className="font-normal cursor-pointer"
                            >
                              {opt}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="best_time">Best Time to Reach You</Label>
                      <Select
                        value={form.best_time}
                        onValueChange={(v) => update("best_time", v)}
                      >
                        <SelectTrigger id="best_time">
                          <SelectValue placeholder="Optional" />
                        </SelectTrigger>
                        <SelectContent>
                          {BEST_TIME_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Consent checkboxes */}
                    <div className="space-y-4 pt-2 border-t">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="transactional_consent"
                          checked={transactionalConsent}
                          onCheckedChange={(v) =>
                            setTransactionalConsent(v === true)
                          }
                          className="mt-1"
                        />
                        <Label
                          htmlFor="transactional_consent"
                          className="text-xs leading-relaxed font-normal cursor-pointer"
                        >
                          I agree to receive transactional SMS messages from
                          Dr. Plumbing, Inc. d.b.a. Signature Construction
                          Group, including appointment reminders, service
                          confirmations, technician dispatch notifications, and
                          scheduling updates. Message frequency varies
                          (typically 1–5 messages per month). Message and data
                          rates may apply. Reply HELP for help, STOP to cancel.
                          By checking this box, I confirm I have read and agree
                          to the{" "}
                          <Link
                            to="/privacy-policy"
                            className="text-primary underline hover:text-primary/80"
                          >
                            Privacy Policy
                          </Link>{" "}
                          and{" "}
                          <Link
                            to="/terms-and-conditions"
                            className="text-primary underline hover:text-primary/80"
                          >
                            SMS Terms
                          </Link>
                          .<Required />
                        </Label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="marketing_consent"
                          checked={marketingConsent}
                          onCheckedChange={(v) =>
                            setMarketingConsent(v === true)
                          }
                          className="mt-1"
                        />
                        <Label
                          htmlFor="marketing_consent"
                          className="text-xs leading-relaxed font-normal cursor-pointer"
                        >
                          (Optional) I also agree to receive marketing SMS
                          messages, including promotional offers and seasonal
                          service reminders, from Dr. Plumbing, Inc. d.b.a.
                          Signature Construction Group. Reply STOP MKT to opt
                          out of marketing while continuing to receive
                          transactional messages.
                        </Label>
                      </div>
                    </div>

                    {errorMsg && (
                      <p className="text-sm text-destructive" role="alert">
                        {errorMsg}
                      </p>
                    )}

                    <Button
                      type="submit"
                      className="w-full font-bold"
                      size="lg"
                      disabled={!canSubmit}
                    >
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </Button>
                  </form>
                )}

                <div className="mt-6 border-t pt-4 text-center text-xs text-muted-foreground">
                  By submitting this form, you agree to our{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/terms-and-conditions"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Terms & Conditions
                  </Link>
                  .
                  <br />
                  We respect your privacy and never share your information with
                  third parties.
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions or need immediate assistance? Contact us using
                  any of the methods below.
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
                      <a
                        href="tel:727-755-7000"
                        className="text-primary hover:underline text-lg font-bold"
                      >
                        (727) 755-7000
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        24/7 Emergency Service
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Text</h3>
                      <a
                        href="sms:+17277557000"
                        className="text-primary hover:underline text-lg font-bold"
                      >
                        (727) 755-7000
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Quick response via text
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:help@dr.plumbing"
                        className="text-primary hover:underline"
                      >
                        help@dr.plumbing
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        1505 Maple St,
                        <br />
                        Clearwater, FL 33755
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
                        Mon - Fri: 8:00 AM - 5:00 PM
                        <br />
                        Sat - Sun: Closed
                        <br />
                        <span className="text-emergency font-semibold">
                          24/7 Emergency Service
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-emergency text-emergency-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">
                    Emergency? Call Now!
                  </h3>
                  <p className="mb-4 opacity-90">
                    We're available 24/7 for urgent plumbing issues
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    asChild
                    className="w-full"
                  >
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
    </div>
  );
};

export default Contact;
