import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object | object[];
  noindex?: boolean;
}

export const SEO = ({
  title = "Dr. Plumbing | Expert Plumbing Services 24/7 | Licensed & Insured",
  description = "Dr. Plumbing provides professional plumbing services including emergency repairs, drain cleaning, water heater service, and water damage restoration. Available 24/7. Call (727) 755-7000.",
  keywords = "plumbing services, emergency plumber, drain cleaning, water heater repair, water damage restoration, licensed plumber, 24/7 plumbing",
  canonicalUrl = "https://dr.plumbing/",
  ogImage = "https://dr.plumbing/og-image.jpg",
  structuredData,
  noindex = false
}: SEOProps) => {
  const structuredDataArray = structuredData 
    ? (Array.isArray(structuredData) ? structuredData : [structuredData])
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dr. Plumbing" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredDataArray.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
