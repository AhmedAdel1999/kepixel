// ThemeContext.js
import { createContext, useState, useContext, useLayoutEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark mode
  const toggleTheme = (value) => {
    setTheme(value);
    localStorage.setItem("theme", value);
  };

  // Save theme to localStorage and apply it on mount
  useLayoutEffect(()=>{
    let currentTheme = localStorage.getItem("theme")
    setTheme(currentTheme)
   },[])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);
