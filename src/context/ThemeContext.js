import {useState, createContext, useEffect} from "react";

const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {
  const getPreferredTheme = () => {
    if (localStorage.getItem("theme") !== undefined) {
      return localStorage.getItem("theme");
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      return "light";
    }
  };

  const [theme, setTheme] = useState(getPreferredTheme() ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext};

export default ThemeProvider;
