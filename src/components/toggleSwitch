import React, { useState } from "react";
import "./ToggleSwitch.css";
import { HiMoon, HiSun } from "react-icons/hi";

const ToggleSwitch = ({ theme, onToggle }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    onToggle();
  };

  return (
    <div className="toggle-container" onClick={toggleTheme}>
      {isDark ? (
        <HiSun color={"#ffea00"} size={24} />
      ) : (
        <HiMoon color={"#1A237E"} size={24} />
      )}
    </div>
  );
};

export default ToggleSwitch;
