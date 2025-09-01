import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const OffersStrip = () => {
  const { currentColors, isDarkMode } = useTheme();

  const stripStyle = {
    width: '100%',
    background: isDarkMode 
      ? `linear-gradient(90deg, ${currentColors.primary} 0%, ${currentColors.secondary} 100%)`
      : 'linear-gradient(90deg, #2C73D2 0%, #F4A300 100%)',
    color: currentColors.text,
    fontWeight: 'bold',
    fontSize: '0.95rem',
    letterSpacing: '0.5px',
    boxShadow: isDarkMode 
      ? '0 2px 12px 0 rgba(59,130,246,0.10)'
      : '0 2px 12px 0 rgba(44,115,210,0.10)',
    padding: '0.18rem 0',
    marginBottom: '0.5rem',
    borderTop: `3px solid ${currentColors.accent}`,
    borderBottom: `3px solid ${currentColors.accent}`,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease',
  };

  const downloadButtonStyle = {
    background: isDarkMode
      ? `linear-gradient(135deg, ${currentColors.accent} 0%, ${currentColors.secondary} 50%, ${currentColors.primary} 100%)`
      : 'linear-gradient(135deg, #FFD700 0%, #F4A300 50%, #FF8C00 100%)',
    color: isDarkMode ? currentColors.background : '#2C73D2',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    textDecoration: 'none',
    fontSize: '0.9rem',
    boxShadow: isDarkMode
      ? '0 4px 15px rgba(252, 211, 77, 0.4)'
      : '0 4px 15px rgba(255, 215, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    border: `2px solid ${isDarkMode ? currentColors.text : '#2C73D2'}`,
    whiteSpace: 'nowrap'
  };

  return (
    <div style={stripStyle}>
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <span style={{
          marginLeft: '1.5rem', 
          marginRight: '1.2rem', 
          fontSize: '1.2rem', 
          color: currentColors.accent, 
          textShadow: isDarkMode ? '0 2px 8px rgba(59,130,246,0.3)' : '0 2px 8px #2056AE44'
        }}>
          Latest Offers:
        </span>
        <marquee 
          behavior="scroll" 
          direction="left" 
          scrollamount="8" 
          style={{
            width: '100%', 
            fontWeight: '600', 
            fontSize: '1.1rem', 
            color: isDarkMode ? currentColors.textSecondary : 'black'
          }}
        >
          <span style={{
            marginRight: '2.5rem', 
            display: 'inline-block', 
            animation: 'pulseOffer 1.2s infinite alternate'
          }}>
            <span style={{color: currentColors.accent}}>★</span> Smile Dental Care: <span style={{color: isDarkMode ? currentColors.text : 'black'}}>10% off on first visit</span>
          </span>
          <span style={{
            marginRight: '2.5rem', 
            display: 'inline-block', 
            animation: 'pulseOffer 1.2s infinite alternate'
          }}>
            <span style={{color: currentColors.accent}}>★</span> Pearl Dental Studio: <span style={{color: isDarkMode ? currentColors.text : 'black'}}>Free consultation for new patients</span>
          </span>
          <span style={{
            marginRight: '2.5rem', 
            display: 'inline-block', 
            animation: 'pulseOffer 1.2s infinite alternate'
          }}>
            <span style={{color: currentColors.accent}}>★</span> Bright Smiles Clinic: <span style={{color: isDarkMode ? currentColors.text : 'black'}}>Complimentary dental checkup</span>
          </span>
        </marquee>
      </div>
      
      {/* Download App Button */}
      <div style={{ paddingRight: '1.5rem', flexShrink: 0 }}>
        <Link 
          to="/download-app" 
          style={downloadButtonStyle}
          onMouseOver={(e) => {
            if (isDarkMode) {
              e.target.style.background = `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.surface} 50%, ${currentColors.background} 100%)`;
              e.target.style.color = currentColors.accent;
            } else {
              e.target.style.background = 'linear-gradient(135deg, #2C73D2 0%, #1E5AA8 50%, #144A87 100%)';
              e.target.style.color = '#FFD700';
            }
            e.target.style.boxShadow = isDarkMode
              ? '0 6px 20px rgba(59, 130, 246, 0.5)'
              : '0 6px 20px rgba(44, 115, 210, 0.5)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = downloadButtonStyle.background;
            e.target.style.color = downloadButtonStyle.color;
            e.target.style.boxShadow = downloadButtonStyle.boxShadow;
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <span>📱</span>
          Download App
        </Link>
      </div>
      
      <style>{`
        @keyframes pulseOffer {
          0% { opacity: 1; }
          100% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default OffersStrip;
