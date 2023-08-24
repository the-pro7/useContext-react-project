import React from "react";
import ThemeProvider, { toggleDarkTheme, useTheme } from "../Context";

const Card = () => {
  const dark = useTheme();
  return (
    <ThemeProvider>
      <div className="theme" style={dark ? { background: "#000" } : null}>
        <p className="theme-chosen" style={dark ? { color: "#fff" } : null}>
          Current theme
        </p>
        <button type="button" onClick={toggleDarkTheme}>
          Toggle Theme
        </button>
      </div>
    </ThemeProvider>
  );
};

export default Card;
