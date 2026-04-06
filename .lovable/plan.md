

## Plan: Create Twilio A2P Compliance Pages

Your Twilio A2P campaign registration requires Privacy Policy and Terms & Conditions URLs, plus proper SMS consent language on your contact form. Here's what we'll build:

### What gets created

**1. Privacy Policy page (`/privacy-policy`)**
- What data you collect (name, email, phone, address)
- How data is used (service delivery, appointment reminders, SMS communications)
- That data is not shared with third parties for marketing
- SMS/text messaging disclosure (message frequency, data rates)
- Contact info for opt-out (STOP to cancel, HELP for help)
- Tailored to Dr. Plumbing's plumbing business in Florida

**2. Terms and Conditions page (`/terms-and-conditions`)**
- Service terms for Dr. Plumbing
- SMS/text messaging program terms (required by Twilio A2P)
  - Program name: Dr. Plumbing Visit Reminders & Notifications
  - Message frequency disclosure
  - STOP/HELP instructions in bold
  - Data rates disclaimer
  - Opt-out instructions
- Liability limitations
- Florida-specific business terms

**3. Update contact form with SMS consent checkboxes**
- Add transactional SMS consent checkbox with proper disclosure text (matching your screenshot): "By providing your phone number, you agree to receive Visit Reminders and other transactional text messages (SMS) from Dr. Plumbing, inc. d.b.a. Signature Construction Group..."
- Add optional marketing SMS consent checkbox
- Links to privacy policy and terms pages

**4. Update Footer with legal links**
- Add Privacy Policy and Terms & Conditions links to the footer

**5. Update App.tsx with new routes**
- `/privacy-policy` and `/terms-and-conditions`

### Technical details
- Two new page components: `src/pages/PrivacyPolicy.tsx` and `src/pages/TermsAndConditions.tsx`
- Uses existing Navbar/Footer/SEO components
- SMS consent text matches the language from your Twilio screenshots (Dr. Plumbing, inc. d.b.a. Signature Construction Group)
- Pages styled consistently with the rest of the site

### Twilio campaign fields you'll use
- **Privacy Policy URL**: `https://dr.plumbing/privacy-policy`
- **Terms and Conditions URL**: `https://dr.plumbing/terms-and-conditions`
- **Consent description**: Can reference your contact form at `https://dr.plumbing/contact` with the checkbox opt-in

