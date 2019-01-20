import React from "react";

import "./About.scss";




import AboutMyself from "./AboutMyself/AboutMyself";
import ContactInfo from "./ContactInfo/ContactInfo";
import Resume from "./Resume/Resume";
import Interests from "./Interests/Interests";

class About extends React.Component {
  state = {
    mounted: false,
  };

  componentDidMount() {
    console.log("ABOUT MOUNTEDs");
    this.setState({
      mounted: true,
    });
  }
  componentWillUnmount() {
    console.log("ABOUT UNMOUNTED");
    this.setState({
      mounted: false,
    });
  }

  render() {
    return (
      <div className={`about-container page`}>
        <div className="about-container__info-container">

        <div className="about-container__info-container__contacts-container">
        <div className="about-container__info-container__contact-info-container info-containers">
            <ContactInfo />
          </div>
          <div className="about-container__info-container__resume-container info-containers">
            <Resume />
          </div>
        </div>


          <div className="about-container__info-container__about-myself-container info-containers">
            <AboutMyself />
          </div>

          <div className="about-container__info-container__interests-container info-containers">
            <Interests />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
