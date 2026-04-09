import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import ResumePage from "../pages/resume/Resume.js";

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    const onToggle = this.props.onToggle; // MECHANICAL FIX: Catching the signal from App.js

    return (
      <HashRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={theme} onToggle={onToggle} />
              ) : (
                <Home {...props} theme={theme} onToggle={onToggle} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={theme} onToggle={onToggle} />}
          />
          <Route
            path="/experience"
            render={(props) => <Experience {...props} theme={theme} onToggle={onToggle} />}
          />
          <Route
            path="/education"
            render={(props) => <Education {...props} theme={theme} onToggle={onToggle} />}
          />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={theme} onToggle={onToggle} />}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={theme} onToggle={onToggle} />}
          />
          <Route
            path="/resume"
            render={(props) => <ResumePage {...props} theme={theme} onToggle={onToggle} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={theme} onToggle={onToggle} />}
          />
        </Switch>
      </HashRouter>
    );
  }
}
