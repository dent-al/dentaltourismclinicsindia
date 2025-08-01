import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const ThemeShowcase = () => {
  const { currentColors, isDarkMode } = useTheme();

  return (
    <div 
      className="min-h-screen py-8 px-4 transition-colors duration-300"
      style={{ backgroundColor: currentColors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 
              className="text-4xl font-bold"
              style={{ color: currentColors.primary }}
            >
              Theme Showcase
            </h1>
            <ThemeToggle size="lg" />
          </div>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: currentColors.textSecondary }}
          >
            Experience our beautiful dark and light mode themes
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div 
            className="p-6 rounded-xl shadow-lg theme-card hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: currentColors.surface }}
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: currentColors.primary }}
            >
              <span className="text-white text-xl">🌙</span>
            </div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{ color: currentColors.text }}
            >
              Dark Mode
            </h3>
            <p style={{ color: currentColors.textSecondary }}>
              Reduces eye strain during nighttime browsing and provides a modern, sleek appearance.
            </p>
          </div>

          {/* Card 2 */}
          <div 
            className="p-6 rounded-xl shadow-lg theme-card hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: currentColors.surface }}
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: currentColors.secondary }}
            >
              <span className="text-white text-xl">☀️</span>
            </div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{ color: currentColors.text }}
            >
              Light Mode
            </h3>
            <p style={{ color: currentColors.textSecondary }}>
              Perfect for daytime use with high contrast and excellent readability.
            </p>
          </div>

          {/* Card 3 */}
          <div 
            className="p-6 rounded-xl shadow-lg theme-card hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: currentColors.surface }}
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: currentColors.accent }}
            >
              <span className="text-white text-xl">⚡</span>
            </div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{ color: currentColors.text }}
            >
              Auto Switch
            </h3>
            <p style={{ color: currentColors.textSecondary }}>
              Automatically adapts to your system preferences for the best experience.
            </p>
          </div>
        </div>

        {/* Interactive Elements Section */}
        <div 
          className="p-8 rounded-xl shadow-lg mb-12"
          style={{ backgroundColor: currentColors.surface }}
        >
          <h2 
            className="text-2xl font-bold mb-6"
            style={{ color: currentColors.text }}
          >
            Interactive Elements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons */}
            <div>
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: currentColors.text }}
              >
                Buttons
              </h3>
              <div className="space-y-3">
                <button 
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:transform hover:scale-105"
                  style={{ 
                    backgroundColor: currentColors.primary,
                    color: 'white'
                  }}
                >
                  Primary Button
                </button>
                <button 
                  className="px-6 py-3 rounded-lg font-medium border-2 transition-all duration-200 hover:transform hover:scale-105"
                  style={{ 
                    borderColor: currentColors.primary,
                    color: currentColors.primary,
                    backgroundColor: 'transparent'
                  }}
                >
                  Secondary Button
                </button>
              </div>
            </div>

            {/* Form Elements */}
            <div>
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: currentColors.text }}
              >
                Form Elements
              </h3>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200"
                  style={{ 
                    backgroundColor: currentColors.background,
                    borderColor: currentColors.border,
                    color: currentColors.text
                  }}
                />
                <select 
                  className="w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200"
                  style={{ 
                    backgroundColor: currentColors.background,
                    borderColor: currentColors.border,
                    color: currentColors.text
                  }}
                >
                  <option>Select an option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicators */}
        <div 
          className="p-8 rounded-xl shadow-lg mb-12"
          style={{ backgroundColor: currentColors.surface }}
        >
          <h2 
            className="text-2xl font-bold mb-6"
            style={{ color: currentColors.text }}
          >
            Status Indicators
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              className="p-4 rounded-lg border-l-4"
              style={{ 
                backgroundColor: currentColors.background,
                borderColor: currentColors.success
              }}
            >
              <div className="flex items-center gap-2">
                <span style={{ color: currentColors.success }}>✅</span>
                <span style={{ color: currentColors.text }}>Success</span>
              </div>
            </div>
            
            <div 
              className="p-4 rounded-lg border-l-4"
              style={{ 
                backgroundColor: currentColors.background,
                borderColor: currentColors.warning
              }}
            >
              <div className="flex items-center gap-2">
                <span style={{ color: currentColors.warning }}>⚠️</span>
                <span style={{ color: currentColors.text }}>Warning</span>
              </div>
            </div>
            
            <div 
              className="p-4 rounded-lg border-l-4"
              style={{ 
                backgroundColor: currentColors.background,
                borderColor: currentColors.error
              }}
            >
              <div className="flex items-center gap-2">
                <span style={{ color: currentColors.error }}>❌</span>
                <span style={{ color: currentColors.text }}>Error</span>
              </div>
            </div>
            
            <div 
              className="p-4 rounded-lg border-l-4"
              style={{ 
                backgroundColor: currentColors.background,
                borderColor: currentColors.info
              }}
            >
              <div className="flex items-center gap-2">
                <span style={{ color: currentColors.info }}>ℹ️</span>
                <span style={{ color: currentColors.text }}>Info</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Theme Info */}
        <div 
          className="p-6 rounded-xl text-center"
          style={{ 
            backgroundColor: currentColors.primary,
            color: 'white'
          }}
        >
          <h3 className="text-xl font-semibold mb-2">
            Current Theme: {isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
          </h3>
          <p className="opacity-90">
            Click the theme toggle button to switch between dark and light modes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeShowcase;
