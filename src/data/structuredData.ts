export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Dr. Plumbing",
  "image": "https://drplumbing.com/logo.png",
  "description": "Professional plumbing services available 24/7. Emergency repairs, drain cleaning, water heater service & water damage restoration.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "140 Island Way 196",
    "addressLocality": "Clearwater",
    "addressRegion": "FL",
    "postalCode": "33767",
    "addressCountry": "US"
  },
  "telephone": "+1-727-755-7000",
  "email": "help@dr.plumbing",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "0.0",
      "longitude": "0.0"
    },
    "geoRadius": "50000"
  },
  "url": "https://drplumbing.com",
  "sameAs": [
    "https://facebook.com/drplumbing",
    "https://twitter.com/drplumbing",
    "https://instagram.com/drplumbing"
  ]
};

export const serviceStructuredData = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "Plumber",
    "name": "Dr. Plumbing"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "0.0",
      "longitude": "0.0"
    }
  },
  "description": description,
  "availableChannel": {
    "@type": "ServiceChannel",
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "+1-727-755-7000",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["English"]
    }
  }
});
