import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ className = '', size = 'md' }) => {
  const { isDarkMode, toggleTheme, currentColors } = useTheme();

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        ${sizeClasses[size]}
        relative rounded-full transition-all duration-300 ease-in-out
        flex items-center justify-center
        border-2 shadow-lg hover:shadow-xl
        transform hover:scale-105 active:scale-95
        ${className}
      `}
      style={{
        backgroundColor: currentColors.surface,
        borderColor: currentColors.border,
        color: currentColors.text,
      }}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* Sun/Moon Icon with smooth transition */}
      <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
        {/* Sun Icon */}
        <div 
          className={`
            absolute transition-transform duration-500 ease-in-out
            ${isDarkMode ? 'transform rotate-90 scale-0 opacity-0' : 'transform rotate-0 scale-100 opacity-100'}
          `}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            style={{ color: '#F59E0B' }}
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </div>

        {/* Moon Icon */}
        <div 
          className={`
            absolute transition-transform duration-500 ease-in-out
            ${isDarkMode ? 'transform rotate-0 scale-100 opacity-100' : 'transform -rotate-90 scale-0 opacity-0'}
          `}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            style={{ color: '#6366F1' }}
          >
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Glow effect */}
      <div 
        className={`
          absolute inset-0 rounded-full opacity-20 transition-opacity duration-300
          ${isDarkMode ? 'bg-blue-400' : 'bg-yellow-400'}
          ${isDarkMode ? 'opacity-20' : 'opacity-30'}
        `}
        style={{
          boxShadow: isDarkMode 
            ? '0 0 20px rgba(99, 102, 241, 0.3)' 
            : '0 0 20px rgba(245, 158, 11, 0.3)'
        }}
      />
    </button>
  );
};

export default ThemeToggle;
