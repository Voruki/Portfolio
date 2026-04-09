import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="100%"
        height="100%"
        viewBox="0 0 1000 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="animated-signature"
          style={{
            fill: "none",
            stroke: "white",
            strokeWidth: "1.5", // Thinner stroke looks more like a pen
            fontSize: "120px",
            fontFamily: "'Brush Script MT', 'Dancing Script', cursive",
            fontStyle: "italic"
          }}
        >
          Yong Ming
        </text>
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .animated-signature {
                  stroke-dasharray: 2500;
                  stroke-dashoffset: 2500;
                  animation: sign-name 3s ease-in-out forwards;
                  /* This Skew makes it look more like natural handwriting */
                  transform: skewX(-10deg);
                  transform-origin: center;
                }

                @keyframes sign-name {
                  0% { 
                    stroke-dashoffset: 2500; 
                    fill: transparent; 
                  }
                  80% { 
                    stroke-dashoffset: 0; 
                    fill: transparent; 
                  }
                  100% { 
                    stroke-dashoffset: 0; 
                    fill: white; 
                  }
                }
              `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;
