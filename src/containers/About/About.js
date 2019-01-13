import React from 'react';

import './About.scss';

import AboutMyself from './AboutMyself/AboutMyself';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import Resume from './Resume/Resume';

class About extends React.Component {
  state = {
    mounted: false,
  };

  componentDidMount() {
    console.log('ABOUT MOUNTEDs');
    this.setState({
      mounted: true,
    });
  }
  componentWillUnmount() {
    console.log('ABOUT UNMOUNTED');
    this.setState({
      mounted: false,
    });
  }

  render() {
    return (
      <div className={`about-container page`}>
        <div className="about-container__info-container">
          <AboutMyself />
          <ContactInfo />
          <Resume />
        </div>
      </div>
    );
  }
}

export default About;
