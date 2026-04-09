import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            {/* NEW WRAPPER: This groups the signature and the switch together on the left */}
            <div className="logo-and-toggle">
              <NavLink to="/home" tag={Link} className="logo">
                <span style={{ color: theme.text }}> &lt;</span>
                <span className="logo-name" style={{ color: theme.text }}>
                  {greeting.logo_name}
                </span>
                <span style={{ color: theme.text }}>/&gt;</span>
              </NavLink>
              
              {/* Toggle is now outside the UL menu and next to the signature */}
              <ToggleSwitch theme={theme} onToggle={this.props.onToggle} />
            </div>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
