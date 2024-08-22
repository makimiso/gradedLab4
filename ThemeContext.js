import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    textColor: 'black',
    backgroundColor: 'white',
  });

  const updateTheme = (textColor, backgroundColor) => {
    setTheme({ textColor, backgroundColor });
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
