import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({
  title = "Dental Tourism Clinics India | Best Dental Care & Treatment",
  description = "Find top-rated dental clinics in India. Expert dental tourism services, world-class treatments, affordable prices. Book your dental appointment today!",
  keywords = "dental tourism India, best dental clinics India, dental treatment abroad, affordable dental care, dental implants India, cosmetic dentistry, root canal treatment, dental surgery India",
  canonicalUrl = "",
  ogImage = "/logo192.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  additionalMeta = [],
  structuredData = null
}) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const finalCanonicalUrl = canonicalUrl || currentUrl;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dental Tourism Clinics India",
    "description": description,
    "url": finalCanonicalUrl,
    "logo": `${currentUrl.split('/')[0]}//${currentUrl.split('/')[2]}/logo192.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "India"
    },
    "medicalSpecialty": [
      "Dentistry",
      "Oral Surgery",
      "Cosmetic Dentistry",
      "Dental Implants",
      "Orthodontics"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Dental Tourism Clinics India" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {finalCanonicalUrl && <link rel="canonical" href={finalCanonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dental Tourism Clinics India" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Additional SEO Meta Tags for Dental Tourism */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/logo.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#317EFB" />
      <meta name="msapplication-TileColor" content="#317EFB" />
    </Helmet>
  );
};

export default SEOHead;
