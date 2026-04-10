import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        // Logic to handle specific icon sets
        // Most brands are in 'fab' (Font Awesome Brands)
        // Fiverr or custom icons sometimes require 'fas' (Font Awesome Solid)
        let iconFamily = "fab";
        if (media.name === "Fiverr" || media.name === "Superhive") {
          iconFamily = "fas"; 
        }

        return (
          <a
            key={i}
            href={media.link}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
            /* MECHANICAL FIX: Added data-name to trigger the CSS Tooltip */
            data-name={media.name} 
          >
            <IconWrapper {...media} {...props}>
              <i className={`${iconFamily} ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
