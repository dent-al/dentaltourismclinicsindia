import React, { createContext, useContext, useState, useEffect } from 'react';

export const SEOContext = createContext();

export const useSEO = () => {
  const context = useContext(SEOContext);
  if (!context) {
    throw new Error('useSEO must be used within a SEOProvider');
  }
  return context;
};

export const SEOProvider = ({ children }) => {
  const [seoData, setSeoData] = useState({
    // Homepage SEO
    homepage: {
      title: "Affordable Dental Tourism Clinics India | Best Dentists & Implants",
      description: "Discover world-class dental treatment in India. Top-rated dental clinics, expert dentists, affordable prices. Discover affordable dental treatment in India with our trusted dental tourism clinics. Get treated by the best dentists for dental implants, root canals, smile makeovers, and cosmetic dentistry. Enjoy world-class care, low-cost packages, and painless treatments.Book your dental tourism experience today!",
      keywords: "dental tourism India, Root Canal Treatment India, Smile Makeover India,  Low-Cost Dental Packages India, Best Dentist in India for Foreigners, best dental clinics India, dental treatment abroad, affordable dental care, dental implants India, cosmetic dentistry India, dental vacation, medical tourism dentistry",
      focusKeywords: ["dental tourism India","Dental Tourism India","Affordable Dental Treatment India", "Best Dental Clinics in India", "Dental Implants India", "best dental clinics", "affordable dental treatment"],
    },
    
    // Clinic Listings SEO
    clinics: {
      title: "Top Dental Tourism Clinics India | Affordable Implants & Care",
      description: "Browse verified dental clinics across India. Compare ratings, Find top dental tourism clinics in India offering affordable dental treatment, dental implants, cosmetic dentistry, and root canal care. Get treated by the best dentists with low-cost dental packages and painless smile makeovers for international patients.specialties, and prices. Book appointments with certified dentists for quality dental care.",
      keywords: "dental clinics India, dentist appointment booking, dental clinic ratings, best dentists India, dental specialties, verified dental clinics",
      focusKeywords: ["dental clinics India", "dentist appointment", "dental specialties"],
    },
    
    // Treatments SEO
    treatments: {
      title: "Dental Treatments in India | Implants, Cosmetic & Oral Surgery",
      description: "Comprehensive dental treatments in India. Dental implants, cosmetic dentistry, root canal, orthodontics, and oral surgery at affordable prices.",
      keywords: "dental treatments India, dental implants India, cosmetic dentistry, root canal treatment, orthodontics India, oral surgery, teeth whitening, dental crowns",
      focusKeywords: ["dental treatments India", "dental implants", "cosmetic dentistry"],
    },
    
    // About SEO
    about: {
      title: "About Dental Tourism Clinics India | Your Trusted Dental Care Partner",
      description: "Learn about our mission to connect patients with the best dental clinics in India. Quality assurance, verified dentists, and exceptional patient care.",
      keywords: "about dental tourism India, dental care partner, quality dental treatment, verified dentists India, patient care, dental tourism services",
      focusKeywords: ["dental tourism India", "quality dental treatment", "verified dentists"],
    },
    
    // Contact SEO
    contact: {
      title: "Contact Dental Tourism Clinics India | Get Expert Dental Consultation",
      description: "Contact us for expert dental consultation and treatment planning. Our team helps you find the best dental clinics and treatments in India.",
      keywords: "contact dental tourism India, dental consultation, treatment planning, dental clinic booking, dental tourism support, expert dental advice",
      focusKeywords: ["dental consultation", "treatment planning", "dental tourism support"],
    }
  });

  const [globalKeywords, setGlobalKeywords] = useState([
    "dental tourism India",
    "best dental clinics India",
    "affordable dental treatment",
    "dental implants India",
    "cosmetic dentistry India",
    "dental care abroad",
    "medical tourism dentistry",
    "quality dental treatment",
    "certified dentists India",
    "dental vacation India",
    "dental tourism packages",
    "dental tourism services"
  ]);

  const [seoSettings, setSeoSettings] = useState({
    siteName: "Dental Tourism Clinics India",
    siteUrl: "https://dentaltourismclinicsindia.com",
    defaultImage: "/logo192.png",
    twitterHandle: "@DentalTourismIN",
    facebookPage: "https://facebook.com/dentaltourismclinicsindia",
    linkedinPage: "https://linkedin.com/company/dental-tourism-clinics-india"
  });

  // Load SEO data from localStorage on component mount
  useEffect(() => {
    const savedSeoData = localStorage.getItem('seoData');
    const savedGlobalKeywords = localStorage.getItem('globalKeywords');
    const savedSeoSettings = localStorage.getItem('seoSettings');

    if (savedSeoData) {
      setSeoData(JSON.parse(savedSeoData));
    }
    if (savedGlobalKeywords) {
      setGlobalKeywords(JSON.parse(savedGlobalKeywords));
    }
    if (savedSeoSettings) {
      setSeoSettings(JSON.parse(savedSeoSettings));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('seoData', JSON.stringify(seoData));
  }, [seoData]);

  useEffect(() => {
    localStorage.setItem('globalKeywords', JSON.stringify(globalKeywords));
  }, [globalKeywords]);

  useEffect(() => {
    localStorage.setItem('seoSettings', JSON.stringify(seoSettings));
  }, [seoSettings]);

  const updatePageSEO = (page, newSeoData) => {
    setSeoData(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        ...newSeoData
      }
    }));
  };

  const addGlobalKeyword = (keyword) => {
    if (!globalKeywords.includes(keyword)) {
      setGlobalKeywords(prev => [...prev, keyword]);
    }
  };

  const removeGlobalKeyword = (keyword) => {
    setGlobalKeywords(prev => prev.filter(k => k !== keyword));
  };

  const updateSeoSettings = (newSettings) => {
    setSeoSettings(prev => ({
      ...prev,
      ...newSettings
    }));
  };

  const getPageSEO = (page) => {
    return seoData[page] || seoData.homepage;
  };

  const generateStructuredData = (page, customData = {}) => {
    const basePage = getPageSEO(page);
    
    return {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": seoSettings.siteName,
      "description": basePage.description,
      "url": `${seoSettings.siteUrl}/${page === 'homepage' ? '' : page}`,
      "logo": `${seoSettings.siteUrl}${seoSettings.defaultImage}`,
      "sameAs": [
        seoSettings.facebookPage,
        seoSettings.linkedinPage
      ],
      ...customData
    };
  };

  const value = {
    seoData,
    globalKeywords,
    seoSettings,
    updatePageSEO,
    addGlobalKeyword,
    removeGlobalKeyword,
    updateSeoSettings,
    getPageSEO,
    generateStructuredData
  };

  return (
    <SEOContext.Provider value={value}>
      {children}
    </SEOContext.Provider>
  );
};

export default SEOContext;
