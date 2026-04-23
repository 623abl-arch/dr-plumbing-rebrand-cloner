import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Terms and Conditions | Dr. Plumbing"
        description="Read Dr. Plumbing's terms and conditions including SMS text messaging program terms, service agreement, and liability information."
        keywords="terms and conditions, SMS terms, plumbing service terms, text messaging terms"
        canonicalUrl="https://dr.plumbing/terms-and-conditions"
      />
      <Navbar />

      <section className="relative bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-lg opacity-90">Last Updated: April 23, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-sm md:prose-base dark:prose-invert">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing our website at <strong>dr.plumbing</strong> or using services provided by Dr. Plumbing,
              inc. d.b.a. Signature Construction Group ("Company," "we," "us," or "our"), you agree to be bound by
              these Terms and Conditions. If you do not agree, please do not use our website or services.
            </p>

            <h2>Services</h2>
            <p>
              Dr. Plumbing provides professional plumbing services in the Tampa Bay and Pinellas County areas of
              Florida, including but not limited to emergency plumbing, drain services, water heater installation
              and repair, pipe repair, leak detection, sewer services, gas line services, re-piping, fixture
              installation, video inspection, water treatment, and maintenance plans.
            </p>

            <h2>Service Estimates and Pricing</h2>
            <ul>
              <li>Estimates provided are based on the information available at the time of assessment and may be subject to change upon further inspection.</li>
              <li>Final pricing will be confirmed before work begins.</li>
              <li>Emergency and after-hours services may incur additional charges.</li>
            </ul>

            <h2>Licensing and Insurance</h2>
            <p>
              Dr. Plumbing is a licensed and insured plumbing company operating in the State of Florida. We are a
              veteran-owned business committed to providing quality service.
            </p>

            <h2>SMS/Text Messaging Program Terms</h2>
            <p>
              The following terms apply to the Dr. Plumbing SMS/text messaging program:
            </p>

            <h3>Program Description</h3>
            <p>
              <strong>Program Name:</strong> Dr. Plumbing Visit Reminders & Notifications
            </p>
            <p>
              By opting in to our SMS program, you consent to receive text messages from Dr. Plumbing, inc. d.b.a.
              Signature Construction Group. Messages may include:
            </p>
            <ul>
              <li>Visit and appointment reminders</li>
              <li>Service confirmations and updates</li>
              <li>Scheduling notifications</li>
              <li>Other transactional messages related to your plumbing services</li>
            </ul>

            <h3>Marketing Messages (Optional)</h3>
            <p>
              If you separately opt in to marketing SMS by checking the marketing consent box on our website, you
              may also receive promotional offers and marketing messages from Dr. Plumbing, inc. d.b.a. Signature
              Construction Group. Marketing SMS consent is optional and is not a condition of receiving our
              plumbing services or transactional messages. You can opt out of marketing messages at any time by
              replying <strong>STOP MKT</strong>, while continuing to receive transactional messages.
            </p>

            <h3>Message Frequency</h3>
            <p>
              Message frequency varies based on your service activity. You can expect approximately 1–5 messages
              per month, though this may vary.
            </p>

            <h3>Consent</h3>
            <p>
              By providing your phone number and submitting our contact form or signing up for services, you
              expressly consent to receive transactional SMS messages from Dr. Plumbing, inc. d.b.a. Signature
              Construction Group at the mobile number provided. Consent to receive SMS messages is not a condition
              of purchase or service. You may withdraw consent at any time by following the opt-out instructions
              below.
            </p>

            <h3>Opt-Out</h3>
            <p>
              You can cancel SMS messages at any time. Simply text <strong>"STOP"</strong> to the number from which
              you received the message. After texting STOP, you will receive a one-time confirmation message, and
              no further messages will be sent. If you wish to re-subscribe, you may do so through our website or
              by contacting us directly.
            </p>

            <h3>Help</h3>
            <p>
              If you are experiencing issues with our messaging program, reply <strong>"HELP"</strong> to any
              message for assistance, or contact us directly at{" "}
              <a href="tel:727-755-7000" className="text-primary hover:underline">(727) 755-7000</a> or{" "}
              <a href="mailto:help@dr.plumbing" className="text-primary hover:underline">help@dr.plumbing</a>.
            </p>

            <h3>Message and Data Rates</h3>
            <p>
              <strong>Message and data rates may apply.</strong> Please consult your mobile carrier's pricing plan
              for details. Dr. Plumbing is not responsible for any charges incurred from your mobile carrier.
            </p>

            <h3>Supported Carriers</h3>
            <p>
              Our SMS program is supported on all major US carriers including T-Mobile, Verizon Wireless, AT&T,
              Sprint, and others. Carriers are not liable for delayed or undelivered messages.
            </p>

            <h3>Privacy</h3>
            <p>
              <strong>We do not sell, rent, or share your phone number or SMS opt-in consent/data with any third
              parties or affiliates for marketing purposes. No mobile information will be shared with third
              parties or affiliates for marketing or promotional purposes. Mobile phone numbers and SMS opt-in
              consent data are excluded from all information sharing with service providers, affiliates, or third
              parties for any purpose.</strong> For full details, please see our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by Florida law, Dr. Plumbing shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or related to your use of our
              website or services.
            </p>

            <h2>Warranty</h2>
            <p>
              Dr. Plumbing stands behind the quality of our work. Specific warranty terms will be provided at the
              time of service and may vary depending on the type of work performed and materials used.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of the State of
              Florida, without regard to its conflict of law principles.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms and Conditions at any time. Changes will be
              posted on this page with an updated "Last Updated" date. Continued use of our services after changes
              constitutes acceptance of the revised terms.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions about these Terms and Conditions, please contact us:</p>
            <ul>
              <li><strong>Phone:</strong> <a href="tel:727-755-7000" className="text-primary hover:underline">(727) 755-7000</a></li>
              <li><strong>Email:</strong> <a href="mailto:help@dr.plumbing" className="text-primary hover:underline">help@dr.plumbing</a></li>
              <li><strong>Address:</strong> 1505 Maple St, Clearwater, FL 33755</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
