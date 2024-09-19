// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const lightTheme = {
  background: '#fff',
  color: '#000',
};

const darkTheme = {
  background: 'rgb(7, 25, 47)',
  color: '#fff',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'dark' : 'light'));
  };

  const themeObject = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledThemeProvider theme={themeObject}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
