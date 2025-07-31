import React from 'react';

const WatermarkProtection = () => {
  const watermarkStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 9999,
    background: `
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 100px,
        rgba(44, 115, 210, 0.02) 100px,
        rgba(44, 115, 210, 0.02) 200px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 100px,
        rgba(244, 163, 0, 0.02) 100px,
        rgba(244, 163, 0, 0.02) 200px
      )
    `,
    backgroundSize: '400px 400px',
    animation: 'watermarkMove 20s linear infinite',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none'
  };

  const textWatermarkStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'rgba(44, 115, 210, 0.05)',
    fontFamily: 'Arial, sans-serif',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    whiteSpace: 'nowrap'
  };

  return (
    <>
      <div style={watermarkStyle}>
        <div style={textWatermarkStyle}>
          DENTAL TOURISM CLINICS INDIA - PROTECTED CONTENT
        </div>
      </div>
      
      {/* CSS Keyframes for animation */}
      <style>{`
        @keyframes watermarkMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 400px 400px, -400px 400px; }
        }
        
        /* Additional protection styles */
        .protected-content {
          position: relative;
        }
        
        .protected-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="12" fill="rgba(44,115,210,0.1)" transform="rotate(-45 100 100)">PROTECTED</text></svg>') repeat;
          pointer-events: none;
          z-index: 1;
        }
        
        /* Disable image context menu specifically */
        img.protected-image {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-user-drag: none !important;
          -khtml-user-drag: none !important;
          -moz-user-drag: none !important;
          -o-user-drag: none !important;
          user-drag: none !important;
          pointer-events: none !important;
        }
        
        /* Blur effect when trying to inspect */
        .inspection-detected {
          filter: blur(10px) !important;
          transition: filter 0.3s ease !important;
        }
      `}</style>
    </>
  );
};

export default WatermarkProtection;
