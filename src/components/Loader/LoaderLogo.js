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
        viewBox="0 0 800 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          className="animated-name"
          style={{
            fill: "none",
            stroke: theme.text,
            strokeWidth: "2",
            fontSize: "80px",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "10px"
          }}
        >
          YONG MING
        </text>
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .animated-name {
                  stroke-dasharray: 500;
                  stroke-dashoffset: 500;
                  animation: draw-name 3s ease-in-out forwards;
                }

                @keyframes draw-name {
                  0% {
                    stroke-dashoffset: 500;
                    fill: rgba(0,0,0,0);
                  }
                  70% {
                    stroke-dashoffset: 0;
                    fill: rgba(0,0,0,0);
                  }
                  100% {
                    stroke-dashoffset: 0;
                    fill: ${theme.text};
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
