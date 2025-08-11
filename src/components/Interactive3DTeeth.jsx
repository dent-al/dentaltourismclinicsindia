import React, { useState, useRef, useEffect } from 'react';
import '../styles/teeth3d.css';

const Interactive3DTeeth = ({ onTeethSelection, selectedTeeth = [], analyzedTeeth = [] }) => {
  const [hoveredTooth, setHoveredTooth] = useState(null);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Define teeth positions for upper and lower jaw with patient-friendly names
  const upperTeeth = [
    // Right side (patient's right)
    { id: 'u8', number: 18, name: 'Back Right Wisdom Tooth', friendlyName: 'Back Right Tooth', x: -120, y: -90, z: 0 },
    { id: 'u7', number: 17, name: 'Back Right Molar', friendlyName: 'Back Right Chewing Tooth', x: -100, y: -80, z: 0 },
    { id: 'u6', number: 16, name: 'Right Back Molar', friendlyName: 'Right Back Chewing Tooth', x: -80, y: -70, z: 0 },
    { id: 'u5', number: 15, name: 'Right Premolar', friendlyName: 'Right Side Tooth', x: -60, y: -55, z: 0 },
    { id: 'u4', number: 14, name: 'Right Premolar', friendlyName: 'Right Side Tooth', x: -40, y: -40, z: 0 },
    { id: 'u3', number: 13, name: 'Right Canine', friendlyName: 'Right Eye Tooth (Sharp)', x: -25, y: -25, z: 5 },
    { id: 'u2', number: 12, name: 'Right Front Tooth', friendlyName: 'Right Front Tooth', x: -12, y: -15, z: 8 },
    { id: 'u1', number: 11, name: 'Front Center Tooth', friendlyName: 'Right Center Front Tooth', x: -6, y: -10, z: 10 },
    
    // Left side (patient's left)
    { id: 'u1l', number: 21, name: 'Front Center Tooth', friendlyName: 'Left Center Front Tooth', x: 6, y: -10, z: 10 },
    { id: 'u2l', number: 22, name: 'Left Front Tooth', friendlyName: 'Left Front Tooth', x: 12, y: -15, z: 8 },
    { id: 'u3l', number: 23, name: 'Left Canine', friendlyName: 'Left Eye Tooth (Sharp)', x: 25, y: -25, z: 5 },
    { id: 'u4l', number: 24, name: 'Left Premolar', friendlyName: 'Left Side Tooth', x: 40, y: -40, z: 0 },
    { id: 'u5l', number: 25, name: 'Left Premolar', friendlyName: 'Left Side Tooth', x: 60, y: -55, z: 0 },
    { id: 'u6l', number: 26, name: 'Left Back Molar', friendlyName: 'Left Back Chewing Tooth', x: 80, y: -70, z: 0 },
    { id: 'u7l', number: 27, name: 'Back Left Molar', friendlyName: 'Back Left Chewing Tooth', x: 100, y: -80, z: 0 },
    { id: 'u8l', number: 28, name: 'Back Left Wisdom Tooth', friendlyName: 'Back Left Tooth', x: 120, y: -90, z: 0 },
  ];

  const lowerTeeth = [
    // Right side (patient's right)
    { id: 'l8', number: 48, name: 'Bottom Back Right Wisdom', friendlyName: 'Bottom Back Right Tooth', x: -120, y: 90, z: 0 },
    { id: 'l7', number: 47, name: 'Bottom Back Right Molar', friendlyName: 'Bottom Right Chewing Tooth', x: -100, y: 80, z: 0 },
    { id: 'l6', number: 46, name: 'Bottom Right Back Molar', friendlyName: 'Bottom Right Chewing Tooth', x: -80, y: 70, z: 0 },
    { id: 'l5', number: 45, name: 'Bottom Right Premolar', friendlyName: 'Bottom Right Side Tooth', x: -60, y: 55, z: 0 },
    { id: 'l4', number: 44, name: 'Bottom Right Premolar', friendlyName: 'Bottom Right Side Tooth', x: -40, y: 40, z: 0 },
    { id: 'l3', number: 43, name: 'Bottom Right Canine', friendlyName: 'Bottom Right Eye Tooth', x: -25, y: 25, z: 5 },
    { id: 'l2', number: 42, name: 'Bottom Right Front Tooth', friendlyName: 'Bottom Right Front Tooth', x: -12, y: 15, z: 8 },
    { id: 'l1', number: 41, name: 'Bottom Front Center Tooth', friendlyName: 'Bottom Right Center Tooth', x: -6, y: 10, z: 10 },
    
    // Left side (patient's left)
    { id: 'l1l', number: 31, name: 'Bottom Front Center Tooth', friendlyName: 'Bottom Left Center Tooth', x: 6, y: 10, z: 10 },
    { id: 'l2l', number: 32, name: 'Bottom Left Front Tooth', friendlyName: 'Bottom Left Front Tooth', x: 12, y: 15, z: 8 },
    { id: 'l3l', number: 33, name: 'Bottom Left Canine', friendlyName: 'Bottom Left Eye Tooth', x: 25, y: 25, z: 5 },
    { id: 'l4l', number: 34, name: 'Bottom Left Premolar', friendlyName: 'Bottom Left Side Tooth', x: 40, y: 40, z: 0 },
    { id: 'l5l', number: 35, name: 'Bottom Left Premolar', friendlyName: 'Bottom Left Side Tooth', x: 60, y: 55, z: 0 },
    { id: 'l6l', number: 36, name: 'Bottom Left Back Molar', friendlyName: 'Bottom Left Chewing Tooth', x: 80, y: 70, z: 0 },
    { id: 'l7l', number: 37, name: 'Bottom Left Molar', friendlyName: 'Bottom Left Chewing Tooth', x: 100, y: 80, z: 0 },
    { id: 'l8l', number: 38, name: 'Lower Left Wisdom', x: 120, y: 90, z: 0 },
  ];

  const allTeeth = [...upperTeeth, ...lowerTeeth];

  const handleToothClick = (tooth) => {
    const newSelection = selectedTeeth.includes(tooth.id)
      ? selectedTeeth.filter(id => id !== tooth.id)
      : [...selectedTeeth, tooth.id];
    
    onTeethSelection(newSelection);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left - centerX;
    const y = e.clientY - rect.top - centerY;
    
    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;
      setRotationY(prev => Math.max(-45, Math.min(45, prev + deltaX * 0.5)));
      setRotationX(prev => Math.max(-30, Math.min(30, prev - deltaY * 0.5)));
      setLastMousePos({ x: e.clientX, y: e.clientY });
    } else {
      // Gentle hover rotation
      setRotationY((x / centerX) * 15);
      setRotationX(-(y / centerY) * 10);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleToothHover = (tooth, e) => {
    if (isMobile) return; // Skip hover on mobile
    
    setHoveredTooth(tooth.id);
    setShowTooltip(tooth);
    const rect = containerRef.current.getBoundingClientRect();
    setTooltipPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 10
    });
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setLastMousePos({ x: touch.clientX, y: touch.clientY });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastMousePos.x;
    const deltaY = touch.clientY - lastMousePos.y;
    
    setRotationY(prev => Math.max(-45, Math.min(45, prev + deltaX * 0.3)));
    setRotationX(prev => Math.max(-30, Math.min(30, prev - deltaY * 0.3)));
    setLastMousePos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const getToothColor = (tooth) => {
    if (analyzedTeeth.includes(tooth.id)) {
      return '#FF6B35'; // Orange for AI-detected problems
    }
    if (selectedTeeth.includes(tooth.id)) {
      return '#FF4444'; // Red for manually selected problems
    }
    if (hoveredTooth === tooth.id) {
      return '#FFD700'; // Gold for hovered
    }
    return '#FFFFFF'; // White for normal
  };

  const getToothShadow = (tooth) => {
    if (analyzedTeeth.includes(tooth.id)) {
      return '0 0 25px rgba(255, 107, 53, 0.9), 0 0 10px rgba(255, 107, 53, 0.6)';
    }
    if (selectedTeeth.includes(tooth.id)) {
      return '0 0 20px rgba(255, 68, 68, 0.8)';
    }
    if (hoveredTooth === tooth.id) {
      return '0 0 15px rgba(255, 215, 0, 0.8)';
    }
    return '0 2px 8px rgba(0, 0, 0, 0.2)';
  };

  const getToothBorder = (tooth) => {
    if (analyzedTeeth.includes(tooth.id)) {
      return '#ea580c'; // Darker orange for AI-detected
    }
    if (selectedTeeth.includes(tooth.id)) {
      return '#dc2626'; // Dark red for selected
    }
    return '#e5e7eb'; // Gray for normal
  };

  return (
    <div className="relative">
      {/* 3D Teeth Container */}
      <div 
        ref={containerRef}
        className={`relative w-full mx-auto perspective-1000 cursor-grab active:cursor-grabbing bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 rounded-2xl border-2 border-blue-200 shadow-lg overflow-hidden select-none teeth-container ${
          isMobile ? 'h-80' : 'h-96'
        }`}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseLeave={() => {
          setRotationX(0);
          setRotationY(0);
          setHoveredTooth(null);
          setShowTooltip(null);
          setIsDragging(false);
        }}
        style={{
          perspective: '1200px'
        }}
      >
        <div 
          className="relative w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Jaw Base with more realistic appearance */}
          <div 
            className="absolute inset-4 rounded-xl"
            style={{
              background: 'linear-gradient(145deg, #f1f5f9, #e2e8f0)',
              transform: 'translateZ(-30px)',
              boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.1)'
            }}
          />
          
          {/* Oral cavity background */}
          <div 
            className="absolute rounded-xl"
            style={{
              left: '20%',
              top: '25%',
              width: '60%',
              height: '50%',
              background: 'radial-gradient(ellipse, #fecaca 30%, #f87171 70%)',
              transform: 'translateZ(-40px)',
              opacity: 0.3
            }}
          />

          {/* Upper Teeth Label */}
          <div 
            className="absolute text-center pointer-events-none"
            style={{
              left: '50%',
              top: '15%',
              transform: 'translateX(-50%)',
              zIndex: 20
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-200">
              <span className="text-sm font-bold text-blue-700">Upper Teeth</span>
            </div>
          </div>

          {/* Lower Teeth Label */}
          <div 
            className="absolute text-center pointer-events-none"
            style={{
              left: '50%',
              bottom: '15%',
              transform: 'translateX(-50%)',
              zIndex: 20
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-200">
              <span className="text-sm font-bold text-blue-700">Lower Teeth</span>
            </div>
          </div>

          {/* Central Gap/Separation Line */}
          <div 
            className="absolute pointer-events-none"
            style={{
              left: '50%',
              top: '48%',
              width: '300px',
              height: '8px',
              transform: 'translate(-50%, -50%)',
              background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.3) 20%, rgba(59, 130, 246, 0.6) 50%, rgba(59, 130, 246, 0.3) 80%, transparent 100%)',
              borderRadius: '4px',
              zIndex: 15
            }}
          >
            {/* Central divider text */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium shadow-sm">
                Bite Line
              </div>
            </div>
          </div>

          {/* Render all teeth */}
          {allTeeth.map((tooth) => (
            <div
              key={tooth.id}
              className={`absolute cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                analyzedTeeth.includes(tooth.id) ? 'animate-pulse' : ''
              }`}
              style={{
                left: `calc(50% + ${tooth.x}px)`,
                top: `calc(50% + ${tooth.y}px)`,
                transform: `translateZ(${tooth.z}px) translate(-50%, -50%)`,
                width: '20px',
                height: '26px',
                background: getToothColor(tooth),
                borderRadius: tooth.id.includes('u') ? '12px 12px 8px 8px' : '8px 8px 12px 12px',
                border: `3px solid ${getToothBorder(tooth)}`,
                boxShadow: getToothShadow(tooth),
                zIndex: 10 + tooth.z,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onClick={() => handleToothClick(tooth)}
              onMouseEnter={(e) => handleToothHover(tooth, e)}
              onMouseLeave={() => {
                setHoveredTooth(null);
                setShowTooltip(null);
              }}
            >
              {/* Enhanced tooth crown detail */}
              <div 
                className="absolute inset-1 rounded-sm"
                style={{
                  background: analyzedTeeth.includes(tooth.id)
                    ? 'linear-gradient(145deg, rgba(255,200,150,0.9), rgba(255,170,100,0.6))'
                    : selectedTeeth.includes(tooth.id) 
                    ? 'linear-gradient(145deg, rgba(255,200,200,0.9), rgba(255,150,150,0.6))'
                    : 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,250,252,0.7))',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              
              {/* Enhanced tooth surface texture */}
              <div 
                className="absolute inset-2 rounded-sm opacity-20"
                style={{
                  background: 'repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(0,0,0,0.08) 1px, rgba(0,0,0,0.08) 2px)'
                }}
              />
              
              {/* AI Detection indicator */}
              {analyzedTeeth.includes(tooth.id) && (
                <div className="absolute -top-3 -right-3 w-5 h-5 bg-orange-500 rounded-full border-2 border-white shadow-lg animate-bounce flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🤖</span>
                </div>
              )}
              
              {/* Manual selection indicator */}
              {selectedTeeth.includes(tooth.id) && !analyzedTeeth.includes(tooth.id) && (
                <div className="absolute -top-3 -right-3 w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              )}
              
              {/* Enhanced hover glow effect */}
              {hoveredTooth === tooth.id && (
                <>
                  <div 
                    className="absolute -inset-2 rounded-lg opacity-40 animate-pulse"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,215,0,0.8), transparent)',
                      filter: 'blur(3px)',
                      zIndex: -1
                    }}
                  />
                  <div 
                    className="absolute -inset-1 rounded-lg opacity-60"
                    style={{
                      background: 'conic-gradient(from 0deg, rgba(255,215,0,0.4), rgba(255,215,0,0.1), rgba(255,215,0,0.4))',
                      animation: 'spin 2s linear infinite',
                      zIndex: -1
                    }}
                  />
                </>
              )}
            </div>
          ))}

          {/* Enhanced Gum line for Upper Teeth */}
          <div 
            className="absolute rounded-full opacity-70"
            style={{
              left: '50%',
              top: '42%',
              width: '300px',
              height: '8px',
              background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.6), rgba(239, 68, 68, 0.9), rgba(239, 68, 68, 0.6))',
              transform: 'translate(-50%, -50%) rotateZ(0deg)',
              zIndex: 5,
              boxShadow: '0 2px 4px rgba(239, 68, 68, 0.3)'
            }}
          />
          
          {/* Enhanced Gum line for Lower Teeth */}
          <div 
            className="absolute rounded-full opacity-70"
            style={{
              left: '50%',
              top: '58%',
              width: '300px',
              height: '8px',
              background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.6), rgba(239, 68, 68, 0.9), rgba(239, 68, 68, 0.6))',
              transform: 'translate(-50%, -50%) rotateZ(0deg)',
              zIndex: 5,
              boxShadow: '0 2px 4px rgba(239, 68, 68, 0.3)'
            }}
          />

          {/* Upper and Lower Jaw Separators */}
          <div 
            className="absolute pointer-events-none"
            style={{
              left: '15%',
              top: '35%',
              width: '70%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(156, 163, 175, 0.5), transparent)',
              zIndex: 8
            }}
          />
          <div 
            className="absolute pointer-events-none"
            style={{
              left: '15%',
              top: '65%',
              width: '70%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(156, 163, 175, 0.5), transparent)',
              zIndex: 8
            }}
          />
        </div>

        {/* Enhanced Tooltip */}
        {showTooltip && (
          <div 
            className="absolute z-50 pointer-events-none"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              transform: 'translate(-50%, -100%)'
            }}
          >
            <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl border border-gray-700 max-w-xs">
              <div className="text-sm font-semibold mb-1">{showTooltip.friendlyName}</div>
              <div className="text-xs text-gray-300 mb-2">Tooth #{showTooltip.number}</div>
              
              {analyzedTeeth.includes(showTooltip.id) && (
                <div className="text-xs bg-orange-500 text-white px-2 py-1 rounded mb-2 flex items-center gap-1">
                  <span>🤖</span> AI detected issue
                </div>
              )}
              
              {selectedTeeth.includes(showTooltip.id) && (
                <div className="text-xs bg-red-500 text-white px-2 py-1 rounded mb-2 flex items-center gap-1">
                  <span>⚠️</span> Problem tooth
                </div>
              )}
              
              <div className="text-xs text-gray-400">
                Click to {selectedTeeth.includes(showTooltip.id) ? 'remove' : 'mark as problem'}
              </div>
              
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Instructions */}
      <div className="mt-6 text-center">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Interactive 3D Tooth Selector
        </h4>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🖱️</span>
            <span>Drag to rotate • Hover for details</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">👆</span>
            <span>Click to select problem teeth</span>
          </div>
        </div>
        
        {/* Control buttons */}
        <div className="flex justify-center gap-3 mb-4">
          <button
            onClick={() => {
              setRotationX(0);
              setRotationY(0);
            }}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
          >
            🔄 Reset View
          </button>
          <button
            onClick={() => onTeethSelection([])}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
          >
            🗑️ Clear All
          </button>
        </div>
        
        {/* Enhanced selected teeth display */}
        {(selectedTeeth.length > 0 || analyzedTeeth.length > 0) && (
          <div className="space-y-3">
            {/* AI Detected teeth */}
            {analyzedTeeth.length > 0 && (
              <div className="p-4 bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 border border-orange-200 rounded-xl">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-lg">🤖</span>
                  <h5 className="font-semibold text-orange-800">AI Detected Problem Teeth</h5>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  {analyzedTeeth.map(toothId => {
                    const tooth = allTeeth.find(t => t.id === toothId);
                    return (
                      <span key={toothId} className="bg-orange-100 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium border border-orange-300 shadow-sm flex items-center gap-1">
                        <span>🦷</span>
                        {tooth?.friendlyName}
                      </span>
                    );
                  })}
                </div>
                <p className="text-xs text-orange-700 opacity-80">
                  These teeth were automatically identified from your photos
                </p>
              </div>
            )}
            
            {/* Manually selected teeth */}
            {selectedTeeth.length > 0 && (
              <div className="p-4 bg-gradient-to-r from-red-50 via-pink-50 to-rose-50 border border-red-200 rounded-xl">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-lg">⚠️</span>
                  <h5 className="font-semibold text-red-800">Your Selected Problem Teeth</h5>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  {selectedTeeth.map(toothId => {
                    const tooth = allTeeth.find(t => t.id === toothId);
                    return (
                      <span key={toothId} className="bg-red-100 text-red-800 px-3 py-2 rounded-lg text-sm font-medium border border-red-300 shadow-sm flex items-center gap-1">
                        <span>😬</span>
                        {tooth?.friendlyName}
                        <button
                          onClick={() => handleToothClick(tooth)}
                          className="ml-1 text-red-600 hover:text-red-900 text-xs"
                        >
                          ×
                        </button>
                      </span>
                    );
                  })}
                </div>
                <p className="text-xs text-red-700 opacity-80">
                  Total: {selectedTeeth.length} teeth selected for treatment consultation
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Patient-Friendly Tooth Guide */}
      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
          <span className="text-lg">📚</span>
          Understanding Your Teeth Layout
        </h4>
        
        {/* Upper and Lower Teeth Visual Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-lg p-3 border border-blue-200">
            <h5 className="font-medium text-blue-700 mb-2 flex items-center gap-2">
              <span className="text-sm">⬆️</span>
              <span>Upper Teeth (Top Jaw)</span>
            </h5>
            <ul className="space-y-1 text-sm text-blue-600">
              <li>• <strong>Front Teeth</strong> - The ones you see when you smile</li>
              <li>• <strong>Eye Teeth (Canines)</strong> - The pointed ones next to front teeth</li>
              <li>• <strong>Side Teeth (Premolars)</strong> - Between sharp and back teeth</li>
              <li>• <strong>Back Teeth (Molars)</strong> - The big flat ones for chewing</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 border border-blue-200">
            <h5 className="font-medium text-blue-700 mb-2 flex items-center gap-2">
              <span className="text-sm">⬇️</span>
              <span>Lower Teeth (Bottom Jaw)</span>
            </h5>
            <ul className="space-y-1 text-sm text-blue-600">
              <li>• <strong>Bottom Front Teeth</strong> - Usually smaller than top ones</li>
              <li>• <strong>Bottom Eye Teeth</strong> - Sharp teeth for tearing food</li>
              <li>• <strong>Bottom Side Teeth</strong> - Help with grinding food</li>
              <li>• <strong>Bottom Back Teeth</strong> - Main chewing teeth</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-medium mb-2 text-blue-700">🔍 Finding Your Problem Teeth:</h5>
            <ul className="space-y-1 text-blue-600">
              <li>• Look in a mirror and point to the tooth that hurts</li>
              <li>• Use your tongue to feel which tooth is sensitive</li>
              <li>• Notice if it's on the top or bottom jaw</li>
              <li>• Click on the matching tooth in the model above</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2 text-blue-700">💡 Helpful Tips:</h5>
            <ul className="space-y-1 text-blue-600">
              <li>• Upper teeth typically show when you smile</li>
              <li>• Lower teeth are usually smaller and harder to see</li>
              <li>• You can select multiple teeth if needed</li>
              <li>• Don't worry about exact names - just click what hurts!</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-3 p-3 bg-white rounded-lg border border-blue-200">
          <p className="text-xs text-blue-600 flex items-center gap-2">
            <span>💡</span>
            <strong>Remember:</strong> The 3D model shows a clear separation between upper and lower teeth with labels and a "Bite Line" in the middle to help you identify which jaw your problem tooth is in.
          </p>
        </div>
      </div>

      {/* Enhanced Legend and Guide */}
      <div className="mt-6 space-y-4">
        {/* Legend */}
        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
            <h5 className="text-sm font-semibold text-gray-800 mb-3 text-center">Color Guide</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-white border-2 border-gray-300 rounded-md shadow-sm"></div>
                <span className="text-gray-600">Healthy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-yellow-400 border-2 border-gray-300 rounded-md shadow-sm"></div>
                <span className="text-gray-600">Hover</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-orange-400 border-2 border-orange-600 rounded-md shadow-sm relative">
                  <span className="absolute -top-1 -right-1 text-xs">🤖</span>
                </div>
                <span className="text-gray-600">AI Detected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-red-500 border-2 border-red-700 rounded-md shadow-sm relative">
                  <span className="absolute -top-1 -right-1 text-xs">!</span>
                </div>
                <span className="text-gray-600">Selected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interactive3DTeeth;
