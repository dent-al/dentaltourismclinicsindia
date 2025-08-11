import React from 'react';

const ThemeShowcase = () => {
  return (
    <div 
      className="min-h-screen py-8 px-4 transition-colors duration-300"
      style={{ backgroundColor: '#f8fafc' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ color: '#2C73D2' }}
          >
            Theme Showcase - Light Mode Only
          </h1>
          <p 
            className="text-lg"
            style={{ color: '#64748b' }}
          >
            Our application now uses a consistent light theme design for optimal user experience.
          </p>
        </div>

        {/* Color Palette */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2C73D2' }}>Primary Colors</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#2C73D2' }}></div>
                <span>Primary Blue (#2C73D2)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#F4A300' }}></div>
                <span>Accent Gold (#F4A300)</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2C73D2' }}>Text Colors</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#1e293b' }}></div>
                <span>Primary Text (#1e293b)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#64748b' }}></div>
                <span>Secondary Text (#64748b)</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2C73D2' }}>Background Colors</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border" style={{ backgroundColor: '#ffffff' }}></div>
                <span>White (#ffffff)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#f8fafc' }}></div>
                <span>Light Gray (#f8fafc)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Components */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2C73D2' }}>Sample Button Styles</h3>
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-6 py-3 rounded-lg font-semibold transition-colors"
                style={{ backgroundColor: '#2C73D2', color: 'white' }}
              >
                Primary Button
              </button>
              <button 
                className="px-6 py-3 rounded-lg font-semibold transition-colors"
                style={{ backgroundColor: '#F4A300', color: 'white' }}
              >
                Accent Button
              </button>
              <button 
                className="px-6 py-3 rounded-lg font-semibold border-2 transition-colors"
                style={{ borderColor: '#2C73D2', color: '#2C73D2', backgroundColor: 'transparent' }}
              >
                Outline Button
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#2C73D2' }}>Sample Card</h3>
            <p style={{ color: '#64748b' }}>
              This is how content looks in our light theme. Clean, professional, and easy to read.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeShowcase;
