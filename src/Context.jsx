import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ToggleDarkContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const toggleDarkTheme = () => {
  let darkTheme =  useContext(ToggleDarkContext);
  return darkTheme
};

const ThemeProvider = ({ children }) => {
  const [darktheme, setDarkTheme] = useState(false);

  const toggleDark = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={darktheme}>
      <ToggleDarkContext.Provider value={toggleDark}>
        {children}
      </ToggleDarkContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
