export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Dr. Plumbing",
  "image": "https://dr.plumbing/logo.png",
  "description": "Professional plumbing services available 24/7. Emergency repairs, drain cleaning, water heater service & water damage restoration.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "140 Island Way 196",
    "addressLocality": "Clearwater",
    "addressRegion": "FL",
    "postalCode": "33767",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.9659,
    "longitude": -82.8001
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
  "areaServed": [
    { "@type": "City", "name": "Clearwater", "sameAs": "https://en.wikipedia.org/wiki/Clearwater,_Florida" },
    { "@type": "City", "name": "Tampa", "sameAs": "https://en.wikipedia.org/wiki/Tampa,_Florida" },
    { "@type": "City", "name": "Largo", "sameAs": "https://en.wikipedia.org/wiki/Largo,_Florida" },
    { "@type": "City", "name": "Dunedin", "sameAs": "https://en.wikipedia.org/wiki/Dunedin,_Florida" },
    { "@type": "City", "name": "Palm Harbor" },
    { "@type": "City", "name": "Oldsmar" },
    { "@type": "City", "name": "Tarpon Springs" },
    { "@type": "City", "name": "Pinellas Park" },
    { "@type": "City", "name": "Seminole" },
    { "@type": "City", "name": "Safety Harbor" }
  ],
  "url": "https://dr.plumbing",
  "sameAs": [
    "https://facebook.com/drplumbing",
    "https://twitter.com/drplumbing",
    "https://instagram.com/drplumbing"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plumbing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Plumbing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drain Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Treatment" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas Line Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Re-Piping" } }
    ]
  }
};

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer 24/7 emergency plumbing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Dr. Plumbing provides 24/7 emergency plumbing services throughout the Tampa Bay area. Call us anytime at (727) 755-7000 for immediate assistance with burst pipes, severe leaks, or any plumbing emergency."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Clearwater, Tampa, Largo, Dunedin, Palm Harbor, Oldsmar, Tarpon Springs, Pinellas Park, Seminole, Safety Harbor, and surrounding areas in the Tampa Bay region."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Dr. Plumbing is fully licensed and insured. We are a veteran-owned small family business committed to providing professional, reliable plumbing services."
      }
    },
    {
      "@type": "Question",
      "name": "What plumbing services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a full range of plumbing services including emergency repairs, drain cleaning, water heater installation and repair, water treatment systems, gas line services, re-piping, leak detection, sewer services, and fixture installation."
      }
    }
  ]
};

export const serviceStructuredData = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "Plumber",
    "name": "Dr. Plumbing",
    "telephone": "+1-727-755-7000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "140 Island Way 196",
      "addressLocality": "Clearwater",
      "addressRegion": "FL",
      "postalCode": "33767",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 27.9659,
      "longitude": -82.8001
    },
    "geoRadius": "50000"
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

export const breadcrumbStructuredData = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
