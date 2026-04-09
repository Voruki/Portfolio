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
          className="animated-name"
          style={{
            fill: "none",
            stroke: "white", // Forcing white so it's visible on blue
            strokeWidth: "2",
            fontSize: "100px",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "8px"
          }}
        >
          YONG MING
        </text>
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .animated-name {
                  stroke-dasharray: 2000;
                  stroke-dashoffset: 2000;
                  animation: draw-name 2.5s ease-in-out forwards;
                }

                @keyframes draw-name {
                  0% { stroke-dashoffset: 2000; fill: transparent; }
                  70% { stroke-dashoffset: 0; fill: transparent; }
                  100% { stroke-dashoffset: 0; fill: white; }
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
