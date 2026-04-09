import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
// We import both themes here from your theme.js
import { yongMingTheme, materialDarkTheme } from "./theme"; 
import { GlobalStyles } from "./global";

function App() {
  // Check local storage so it remembers the user's choice on refresh
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const onToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Logic to swap the actual theme objects
  const currentTheme = theme === "light" ? yongMingTheme : materialDarkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <div>
          {/* Pass everything down the chain */}
          <Main theme={currentTheme} onToggle={onToggle} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
