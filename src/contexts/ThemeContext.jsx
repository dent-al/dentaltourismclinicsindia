import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Check for saved theme preference or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      // Light mode colors
      light: {
        primary: '#2C73D2',
        secondary: '#F4A300',
        background: '#FFFFFF',
        surface: '#F8FAFC',
        text: '#1F2937',
        textSecondary: '#6B7280',
        border: '#E5E7EB',
        accent: '#FFD700',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6'
      },
      // Dark mode colors
      dark: {
        primary: '#3B82F6',
        secondary: '#FBBF24',
        background: '#111827',
        surface: '#1F2937',
        text: '#F9FAFB',
        textSecondary: '#D1D5DB',
        border: '#374151',
        accent: '#FCD34D',
        success: '#059669',
        warning: '#D97706',
        error: '#DC2626',
        info: '#2563EB'
      }
    }
  };

  const currentColors = isDarkMode ? theme.colors.dark : theme.colors.light;

  return (
    <ThemeContext.Provider value={{ ...theme, currentColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
