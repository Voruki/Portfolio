import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
// We removed FeelingProud as we are now using a real photo of your work
// import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* The Precision Override: We are now displaying 'vorky.png' */}
            <img
              alt="Yong Ming Ngoh - APAC Presales Solution Manager"
              src={require("../../assets/images/vorky.png")}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px", // Optional: Gives the photo soft corners
                boxShadow: `0px 10px 30px ${theme.imageHighlight}44` // Adds a glow using your custom theme color
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
