import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Privacy Policy | Dr. Plumbing"
        description="Read Dr. Plumbing's privacy policy. Learn how we collect, use, and protect your personal information including SMS messaging disclosures."
        keywords="privacy policy, data protection, SMS privacy, plumbing privacy policy"
        canonicalUrl="https://dr.plumbing/privacy-policy"
      />
      <Navbar />

      <section className="relative bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg opacity-90">Last Updated: April 5, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-sm md:prose-base dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              Dr. Plumbing, inc. d.b.a. Signature Construction Group ("we," "us," or "our") is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website <strong>dr.plumbing</strong>, use our services, or
              communicate with us via phone, email, or text message (SMS).
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, phone number, email address, and mailing/service address.</li>
              <li><strong>Service Information:</strong> Details about the plumbing services you request or receive.</li>
              <li><strong>Communication Records:</strong> Records of your communications with us, including phone calls, emails, and text messages.</li>
              <li><strong>Website Usage Data:</strong> IP address, browser type, pages visited, and other analytics data collected through cookies and similar technologies.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
              <li>To provide and manage plumbing services you request.</li>
              <li>To send appointment reminders and service notifications via SMS/text message.</li>
              <li>To communicate with you about your account, services, and inquiries.</li>
              <li>To send promotional offers and marketing messages (only with your explicit consent).</li>
              <li>To improve our website, services, and customer experience.</li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h2>SMS/Text Messaging Disclosure</h2>
            <p>
              When you provide your phone number and consent to receive text messages from Dr. Plumbing, inc.
              d.b.a. Signature Construction Group, the following applies:
            </p>
            <ul>
              <li><strong>Program Name:</strong> Dr. Plumbing Visit Reminders & Notifications</li>
              <li><strong>Message Types:</strong> You may receive visit reminders, appointment confirmations, service updates, and other transactional messages related to your plumbing services.</li>
              <li><strong>Message Frequency:</strong> Message frequency varies based on your service activity. Typically 1–5 messages per month.</li>
              <li><strong>Message and Data Rates:</strong> Message and data rates may apply. Check with your mobile carrier for details.</li>
              <li><strong>Opt-Out:</strong> You can opt out of text messages at any time by replying <strong>STOP</strong> to any message. You will receive a confirmation message and no further texts will be sent.</li>
              <li><strong>Help:</strong> For help, reply <strong>HELP</strong> to any message, or contact us at (727) 755-7000 or help@dr.plumbing.</li>
              <li><strong>Carriers Supported:</strong> T-Mobile, Verizon, AT&T, and all major US carriers are supported. Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
            <p>
              <strong>We do not sell, rent, or share your phone number or SMS opt-in consent with any third parties
              or affiliates for marketing purposes.</strong>
            </p>

            <h2>Information Sharing</h2>
            <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (e.g., scheduling software, payment processors), subject to confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your personal
              information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access, correct, or delete your personal information.</li>
              <li>Opt out of marketing communications.</li>
              <li>Opt out of text messages by replying <strong>STOP</strong>.</li>
              <li>Request information about the data we hold about you.</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar technologies (including Microsoft Clarity) to analyze website
              traffic and improve your experience. You can control cookie settings through your browser preferences.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect personal
              information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an
              updated "Last Updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li><strong>Phone:</strong> (727) 755-7000</li>
              <li><strong>Email:</strong> help@dr.plumbing</li>
              <li><strong>Address:</strong> 140 Island Way 196, Clearwater, FL 33767</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
