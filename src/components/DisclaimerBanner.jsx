import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const DisclaimerBanner = () => {
  const { currentColors, isDarkMode } = useTheme();

  const bannerStyle = {
    background: isDarkMode
      ? `linear-gradient(90deg, ${currentColors.accent} 0%, ${currentColors.secondary} 100%)`
      : 'linear-gradient(90deg, #FFD700 0%, #F4A300 100%)',
    color: isDarkMode ? currentColors.background : '#2056AE',
    fontWeight: 'bold',
    fontSize: '1.05rem',
    padding: '1rem 2rem',
    margin: '0 auto 1rem auto',
    borderRadius: '1.2rem',
    maxWidth: '900px',
    boxShadow: isDarkMode
      ? '0 2px 16px 0 rgba(59,130,246,0.10)'
      : '0 2px 16px 0 rgba(44,115,210,0.10)',
    border: `2px solid ${isDarkMode ? currentColors.primary : '#2C73D2'}`,
    textAlign: 'center',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={bannerStyle}>
      This online platform helps users find Dental Clinics across India but is not a healthcare provider. Information provided on this platform is for general guidance only and does not constitute medical advice. We do not own or control any listed clinics, all operate independently. Users are solely responsible for their decision to contact or engage with any clinic. We do not guarantee the accuracy, quality, or outcomes of any clinic's services. We are not liable for any issues, misguidance, complications, or dissatisfaction arising from use of the platform or treatment by any third party. Reviews and ratings are personal opinions and not verified by us. Platform content and listings may change without prior notice. This platform only guides users to suitable clinics and is not responsible for any resulting problems.
      <br />
      <span style={{
        color: isDarkMode ? currentColors.error : '#C0392B', 
        fontWeight: 'bold'
      }}>
        ALWAYS CONSULT A LICENSED PROFESSIONAL.
      </span>
    </div>
  );
};

export default DisclaimerBanner;
