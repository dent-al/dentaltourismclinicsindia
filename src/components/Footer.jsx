import React from "react";
import { Link } from "react-router-dom";
import customLogo from '../logo.svg';
import OptimizedImage from './OptimizedImage';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { currentColors, isDarkMode } = useTheme();
  
  return (
    <footer 
      className="w-full pt-6 sm:pt-10 pb-4 mt-0 overflow-x-hidden transition-colors duration-300"
      style={{
        backgroundColor: isDarkMode ? currentColors.surface : '#2C73D2',
        color: 'white' // Always white text
      }}
    >
    <div className="max-w-7xl mx-auto flex flex-col items-center px-3 sm:px-4 md:px-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 items-start gap-x-3 gap-y-6 sm:gap-y-4 mb-5"key="footer-grid">
        <div className="min-w-[120px] flex flex-col items-start sm:items-start">
          <span className="font-bold text-base mb-2">For Patients</span>
          <Link to="/search-dentist" className="text-sm hover:underline mb-1">Search Dentist</Link>
          <Link to="/clinics" className="text-sm hover:underline mb-1">Search Dental Clinics</Link>
          <Link to="/consult" className="text-sm hover:underline mb-1">Consult Now</Link>
          <Link to="/patient-refund-policy" className="text-sm hover:underline mb-1">Refund Policy</Link>
        </div>
        <div className="min-w-[110px] flex flex-col items-start sm:items-start">
          <span className="font-bold text-base mb-2">For Dentist</span>
          <Link to="/dentist-profile" className="text-sm hover:underline mb-1">Profile</Link>
          <Link to="/refund-policy" className="text-sm hover:underline mb-1">Refund Policy</Link>
        </div>
        <div className="min-w-[160px] flex flex-col items-start sm:items-start">
          <span className="font-bold text-base mb-2">For CBCT & OPG Centre</span>
          <Link to="/cbct-profile" className="text-sm hover:underline mb-1">Profile</Link>
          <Link to="/refund-policy" className="text-sm hover:underline mb-1">Refund Policy</Link>
        </div>
         <div className="min-w-[160px] flex flex-col items-start sm:items-start">
          <span className="font-bold text-base mb-2">For Blood Test Lab</span>
          <Link to="/cbct-profile" className="text-sm hover:underline mb-1">Profile</Link>
          <Link to="/refund-policy" className="text-sm hover:underline mb-1">Refund Policy</Link>
        </div>
        <div className="min-w-[120px] flex flex-col items-start sm:items-start">
          <span className="font-bold text-base mb-2">For Dental Products</span>
          <Link to="/product-profile" className="text-sm hover:underline mb-1">Profile</Link>
          <Link to="/refund-policy" className="text-sm hover:underline mb-1">Refund Policy</Link>
        </div>
        <div className="min-w-[120px] flex flex-col items-start sm:items-start">
          <span className="font-bold text-base mb-2">More</span>
          <Link to="/help" className="text-sm hover:underline mb-1">Help & Center</Link>
          <Link to="/privacy-policy" className="text-sm hover:underline mb-1">Privacy Policy</Link>
          <Link to="/admin/login" className="text-sm hover:underline mb-1">Cookie Policy</Link>
          <Link to="/terms" className="text-sm hover:underline mb-1">T&C</Link>
          <Link to="/admin/login" className="text-sm hover:underline mb-1">Site Map</Link>
          <Link to="/contact" className="text-sm hover:underline mb-1">Contact Us</Link>
          <Link to="/articles" className="text-sm hover:underline mb-1">Articles</Link>
        </div>
        <div className="min-w-[120px] flex flex-col items-start sm:items-start">
          <span className="font-bold text-base mb-2">Social</span>
          <div className="flex gap-3 mt-1 justify-start">
            <a href="https://www.instagram.com/dentaltourismclinicsindia?igsh=MWF1aG1nN21pczVnYw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <OptimizedImage 
                src={require('../assets/instagram.png')} 
                alt="Instagram" 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 hover:scale-110 transition-transform duration-200" 
              />
            </a>
            <a href="https://youtube.com/@dentaltourismclinicsindia?si=jp-9UDM9RO_CsJ2W" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <OptimizedImage 
                src={require('../assets/youtube.png')} 
                alt="YouTube" 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 hover:scale-110 transition-transform duration-200" 
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 sm:mt-2 mb-2 sm:mb-4">
        <OptimizedImage 
          src={customLogo} 
          alt="Dental Tourism Clinics India Logo" 
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-3 sm:mb-2" 
        />
        <span className="text-xs sm:text-sm md:text-base font-bold text-white text-center px-4 sm:px-2 leading-relaxed">
          Copyright © 2025, Dental Tourism Clinics India. All rights reserved.{" "}
          <Link 
            to="/admin/login" 
            className="text-white hover:text-white transition-colors duration-300"
            style={{ textDecoration: 'none' }}
          >
            Terms apply.
          </Link>
        </span>
        
        {/* Disclaimer */}
        <div className="text-xs text-white/80 text-center px-4 sm:px-6 md:px-8 mt-3 leading-relaxed max-w-4xl">
          <p className="mb-2">
            <strong>Disclaimer:</strong> The information provided on this website is for general informational purposes only and should not be considered as medical advice. 
            Always consult with qualified dental professionals before making any treatment decisions.
          </p>
          <p>
            Dental Tourism Clinics India serves as a platform connecting patients with dental clinics and does not directly provide medical services. 
            Treatment outcomes may vary, and we recommend verifying credentials and facilities before proceeding with any dental treatment.
          </p>
        </div>
        
        {/* Hidden Admin Link - Only visible to those who know */}
        <div className="mt-1 opacity-20 hover:opacity-100 transition-opacity duration-500">
          <Link 
            to="/admin/login" 
            className="text-xs tracking-widest transition-colors duration-300"
            style={{ 
              fontSize: '8px', 
              letterSpacing: '1px',
              color: `${currentColors.text}30`,
            }}
            onMouseEnter={(e) => {
              e.target.style.color = `${currentColors.text}80`;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = `${currentColors.text}30`;
            }}
            title="Admin Access"
          >
            •
          </Link>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
