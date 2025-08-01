import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const FloatingThemeToggle = () => {
  const { isDarkMode, toggleTheme, currentColors } = useTheme();

  return (
    <div className="fixed bottom-20 left-6 z-50">
      <button
        onClick={toggleTheme}
        className="
          w-14 h-14 rounded-full shadow-2xl border-2 
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          transform hover:scale-110 active:scale-95
          backdrop-blur-sm
        "
        style={{
          backgroundColor: isDarkMode ? currentColors.surface : currentColors.background,
          borderColor: currentColors.primary,
          boxShadow: isDarkMode 
            ? '0 8px 32px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)' 
            : '0 8px 32px rgba(44, 115, 210, 0.3), 0 0 20px rgba(44, 115, 210, 0.2)'
        }}
        title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {/* Animated Icon Container */}
        <div className="relative w-8 h-8 overflow-hidden">
          {/* Sun Icon */}
          <div 
            className={`
              absolute inset-0 transition-all duration-500 ease-in-out flex items-center justify-center
              ${isDarkMode ? 'transform rotate-90 scale-0 opacity-0' : 'transform rotate-0 scale-100 opacity-100'}
            `}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              style={{ color: '#F59E0B' }}
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </div>

          {/* Moon Icon */}
          <div 
            className={`
              absolute inset-0 transition-all duration-500 ease-in-out flex items-center justify-center
              ${isDarkMode ? 'transform rotate-0 scale-100 opacity-100' : 'transform -rotate-90 scale-0 opacity-0'}
            `}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              style={{ color: '#6366F1' }}
            >
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Pulse Animation Ring */}
        <div 
          className={`
            absolute inset-0 rounded-full opacity-20 animate-ping
            ${isDarkMode ? 'bg-blue-400' : 'bg-yellow-400'}
          `}
          style={{
            animationDuration: '3s',
            animationIterationCount: 'infinite'
          }}
        />

        {/* Background Glow */}
        <div 
          className="absolute inset-0 rounded-full opacity-30 blur-sm transition-opacity duration-300"
          style={{
            backgroundColor: isDarkMode ? '#3B82F6' : '#F59E0B',
            transform: 'scale(1.2)',
            zIndex: -1
          }}
        />
      </button>

      {/* Optional Label */}
      <div 
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs font-medium opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
        style={{
          backgroundColor: currentColors.surface,
          color: currentColors.text,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        {isDarkMode ? 'Switch to Light' : 'Switch to Dark'}
      </div>
    </div>
  );
};

export default FloatingThemeToggle;
