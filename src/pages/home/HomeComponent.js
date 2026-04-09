import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        {/* MECHANICAL FIX: Pass the onToggle function here */}
        <Header theme={this.props.theme} onToggle={this.props.onToggle} />
        
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        
        {/* Optional: Pass it to Footer if your footer has a theme-dependent logo */}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
