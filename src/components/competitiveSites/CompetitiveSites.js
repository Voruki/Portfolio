import React from "react";
import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.siteName}
                placement="top"
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.siteName}</strong>
                  </Tooltip>
                }
              >
                <li className="competitive-sites-inline" name={logo.siteName}>
                  <a
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    {logo.logo_path ? (
                      <img
                        src={require(`../../assets/images/${logo.logo_path}`)}
                        alt={logo.siteName}
                        style={{
                          width: "50px",      /* Standardized size */
                          height: "50px",
                          borderRadius: "50%",
                          objectFit: "contain",
                          padding: "4px"      /* Consistent internal margin */
                        }}
                      />
                    ) : (
                      <span
                        className="iconify"
                        data-icon={logo.iconifyClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}
                  </a>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
