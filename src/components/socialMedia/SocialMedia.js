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
    <div className={`social-media-div ${props.center ? "social-media-centered" : ""}`}>
      {socialMediaLinks.map((media, i) => {
        /* MECHANICAL LOGIC: 
          Most brands use 'fab' (Font Awesome Brands). 
          Specific icons like 'cube' or 'briefcase' usually reside in 'fas' (Solid).
        */
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
            /* This data-name is pulled by the CSS for the hover tooltip */
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
