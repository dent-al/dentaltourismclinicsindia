import React, { useState } from 'react';

const ProtectionSummary = () => {
  const [showDetails, setShowDetails] = useState(false);

  const protectionFeatures = [
    {
      icon: '🚫',
      title: 'Right-Click Disabled',
      description: 'Context menu access blocked to prevent easy copying'
    },
    {
      icon: '⌨️',
      title: 'Keyboard Shortcuts Blocked',
      description: 'Ctrl+C, Ctrl+A, Ctrl+S, Ctrl+U, F12 and other shortcuts disabled'
    },
    {
      icon: '🖼️',
      title: 'Image Protection',
      description: 'Images cannot be dragged, saved, or right-clicked'
    },
    {
      icon: '📄',
      title: 'Text Selection Disabled',
      description: 'Content cannot be selected or highlighted'
    },
    {
      icon: '🖨️',
      title: 'Print Protection',
      description: 'Printing functionality is disabled'
    },
    {
      icon: '🔍',
      title: 'Developer Tools Detection',
      description: 'Content blurs when dev tools are opened'
    },
    {
      icon: '📸',
      title: 'Screenshot Detection',
      description: 'Alerts when potential screenshot attempts are made'
    },
    {
      icon: '🤖',
      title: 'Anti-Scraping',
      description: 'Protection against automated content scraping'
    },
    {
      icon: '💧',
      title: 'Watermark Protection',
      description: 'Invisible watermarks overlay the content'
    },
    {
      icon: '⚠️',
      title: 'Console Warnings',
      description: 'Copyright warnings displayed in browser console'
    }
  ];

  if (!showDetails) {
    return (
      <div 
        onClick={() => setShowDetails(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #2C73D2, #F4A300)',
          color: 'white',
          padding: '12px 16px',
          borderRadius: '25px',
          cursor: 'pointer',
          zIndex: 9998,
          fontSize: '14px',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(44, 115, 210, 0.3)',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          animation: 'protectionPulse 2s infinite'
        }}
      >
        🛡️ Content Protected
        <style>{`
          @keyframes protectionPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      borderRadius: '15px',
      padding: '25px',
      zIndex: 99998,
      maxWidth: '500px',
      maxHeight: '80vh',
      overflow: 'auto',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      border: '2px solid #2C73D2',
      userSelect: 'none',
      WebkitUserSelect: 'none'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        paddingBottom: '15px',
        borderBottom: '2px solid #f0f0f0'
      }}>
        <h3 style={{
          margin: 0,
          color: '#2C73D2',
          fontSize: '20px',
          fontWeight: 'bold'
        }}>
          🛡️ Content Protection Active
        </h3>
        <button
          onClick={() => setShowDetails(false)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#999',
            padding: '5px'
          }}
        >
          ×
        </button>
      </div>

      {/* Protection Features Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginBottom: '20px'
      }}>
        {protectionFeatures.map((feature, index) => (
          <div
            key={index}
            style={{
              background: '#f8f9fa',
              padding: '15px',
              borderRadius: '10px',
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>
              {feature.icon}
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '5px',
              color: '#2C73D2'
            }}>
              {feature.title}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666',
              lineHeight: '1.3'
            }}>
              {feature.description}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        padding: '15px',
        background: 'linear-gradient(135deg, #2C73D2, #F4A300)',
        borderRadius: '10px',
        color: 'white'
      }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>
          © Dental Tourism Clinics India
        </div>
        <div style={{ fontSize: '12px', opacity: 0.9 }}>
          All content protected by copyright law. Unauthorized use prohibited.
        </div>
      </div>

      {/* Close hint */}
      <div style={{
        textAlign: 'center',
        marginTop: '15px',
        fontSize: '12px',
        color: '#999'
      }}>
        Click anywhere outside or the × to close
      </div>
    </div>
  );
};

export default ProtectionSummary;
