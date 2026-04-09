import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
// IMPORT BOTH THEMES: Ensure these names match your src/theme.js
import { yongMingTheme, materialDarkTheme } from "./theme"; 
import { GlobalStyles } from "./global";

function App() {
  // 1. Create a "State" to track the theme. Default is 'light'.
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // 2. The function that performs the swap
  const onToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Saves choice for next visit
  };

  // 3. Select which theme object to use based on the state
  const currentTheme = theme === "light" ? yongMingTheme : materialDarkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <div>
          {/* 4. Pass the theme AND the toggle function down to Main */}
          <Main theme={currentTheme} onToggle={onToggle} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
