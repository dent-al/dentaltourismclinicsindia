import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const lightColors = {
  primary: '#2C73D2',
  secondary: '#F4A300',
  accent: '#FFD700',
  text: '#222',
  background: '#fff',
};
const darkColors = {
  primary: '#2056AE',
  secondary: '#F4A300',
  accent: '#FFD700',
  text: '#fff',
  background: '#222',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const isDarkMode = theme === 'dark';
  const currentColors = isDarkMode ? darkColors : lightColors;

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode, currentColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
