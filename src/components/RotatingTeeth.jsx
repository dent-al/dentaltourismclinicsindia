import React, { useState } from 'react';
import teethImage from '../assets/3d teeth.png';

const RotatingTeeth = ({ size = 100, speed = 2 }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      className="rotating-teeth-container flex items-center justify-center"
      style={{ width: size, height: size, padding: '10px', marginTop: '5px', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <div className="rotating-teeth">
        {!imageError ? (
          <img 
            src={teethImage} 
            alt="3D Rotating Teeth"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain',
              maxWidth: `${size}px`,
              maxHeight: `${size}px`
            }}
            onError={handleImageError}
          />
        ) : (
          // Fallback to emoji if image fails to load
          <div style={{ fontSize: `${size * 0.6}px` }}>🦷</div>
        )}
      </div>
      
      <style>{`
        .rotating-teeth-container {
          perspective: 1000px;
          margin: 0 auto;
        }
        
        .rotating-teeth {
          animation: simpleRotate ${speed}s linear infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 4px 12px rgba(44, 115, 210, 0.2))
                  drop-shadow(0 8px 25px rgba(0, 0, 0, 0.1));
        }
        
        @keyframes simpleRotate {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default RotatingTeeth;
