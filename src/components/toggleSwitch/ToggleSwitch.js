import React from "react";
import "./ToggleSwitch.css";
import { HiMoon, HiSun } from "react-icons/hi";

const ToggleSwitch = ({ theme, onToggle }) => {
  // MECHANICAL FIX: 
  // We check if the current theme's body color matches your Dark Mode color.
  // This ensures the icon is ALWAYS in sync with the actual background.
  const isDark = theme.body === "#263238"; 

  return (
    <div className="toggle-container" onClick={onToggle}>
      {isDark ? (
        // When in Dark Mode, show the Sun to switch back to Light
        <HiSun color={"#ffea00"} size={24} />
      ) : (
        // When in Light Mode, show the Moon to switch to Dark
        <HiMoon color={"#1A237E"} size={24} />
      )}
    </div>
  );
};

export default ToggleSwitch;
