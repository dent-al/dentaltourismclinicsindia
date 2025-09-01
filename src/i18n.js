// Internationalization setup for the dental tourism application
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Languages configuration
export const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'hi',
    name: 'हिंदी',
    flag: '🇮🇳'
  }
];

// Translation resources
const resources = {
  en: {
    translation: {
      // Common translations
      'welcome': 'Welcome',
      'loading': 'Loading...',
      'book_appointment': 'Book Appointment',
      'find_dentist': 'Find Dentist',
      'consultation': 'Consultation',
      'dental_tourism': 'Dental Tourism',
      'affordable_care': 'Affordable Dental Care',
      
      // Navigation
      'home': 'Home',
      'clinics': 'Clinics',
      'dentists': 'Dentists',
      'treatments': 'Treatments',
      'about': 'About',
      'contact': 'Contact',
      
      // Features
      'instant_consultation': 'Instant Video Consultation',
      'trusted_clinics': 'Trusted Dental Clinic Near You',
      'dental_scan': '3D Dental Scan Near You',
      'blood_test': 'Blood Test Near You',
      
      // Common actions
      'learn_more': 'Learn More',
      'get_started': 'Get Started',
      'book_now': 'Book Now',
      'view_details': 'View Details',
      'read_more': 'Read More',
      
      // Footer
      'all_rights_reserved': 'All rights reserved',
      'privacy_policy': 'Privacy Policy',
      'terms_conditions': 'Terms & Conditions',
      'refund_policy': 'Refund Policy'
    }
  },
  hi: {
    translation: {
      // Hindi translations
      'welcome': 'स्वागत है',
      'loading': 'लोड हो रहा है...',
      'book_appointment': 'अपॉइंटमेंट बुक करें',
      'find_dentist': 'डेंटिस्ट खोजें',
      'consultation': 'परामर्श',
      'dental_tourism': 'डेंटल टूरिज्म',
      'affordable_care': 'किफायती दंत चिकित्सा',
      
      // Navigation
      'home': 'होम',
      'clinics': 'क्लिनिक',
      'dentists': 'डेंटिस्ट',
      'treatments': 'उपचार',
      'about': 'हमारे बारे में',
      'contact': 'संपर्क',
      
      // Features
      'instant_consultation': 'तत्काल वीडियो परामर्श',
      'trusted_clinics': 'आपके पास विश्वसनीय डेंटल क्लिनिक',
      'dental_scan': 'आपके पास 3D डेंटल स्कैन',
      'blood_test': 'आपके पास ब्लड टेस्ट',
      
      // Common actions
      'learn_more': 'और जानें',
      'get_started': 'शुरू करें',
      'book_now': 'अभी बुक करें',
      'view_details': 'विवरण देखें',
      'read_more': 'और पढ़ें',
      
      // Footer
      'all_rights_reserved': 'सभी अधिकार सुरक्षित',
      'privacy_policy': 'गोपनीयता नीति',
      'terms_conditions': 'नियम और शर्तें',
      'refund_policy': 'रिफंड नीति'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false // React already escapes values
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
