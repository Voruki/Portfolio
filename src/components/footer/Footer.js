import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img" aria-label="heart">❤️</span> by {greeting.title}
        </p>
        
        {/* Professional Disclaimer for Originality */}
        <p 
          className="footer-text" 
          style={{ 
            color: props.theme.secondaryText,
            fontSize: "13px",      // Slightly smaller for a clean look
            marginTop: "-10px",    // Pulls it closer to the line above
            paddingBottom: "20px", // Adds spacing at the bottom of the page
            opacity: 0.8           // Makes it look like a formal footer note
          }}
        >
          All graphics and 3D industrial simulations featured are original works and professional creations by the author. (No AI-generated content).
        </p>
      </Fade>
    </div>
  );
}
