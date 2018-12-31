import React from 'react';

import './About.scss';

import AboutMyself from './AboutMyself/AboutMyself';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

class About extends React.Component {
  state = {
    mounted: false,
  };

  // componentDidMount() {
  //   console.log('ABOUT MOUNTEDs');
  //   this.setState({
  //     mounted: true,
  //   });
  // }
  // componentWillUnmount() {
  //   console.log('ABOUT UNMOUNTED');
  //   this.setState({
  //     mounted: false,
  //   });
  // }

  render() {
    return (
      <div className={`about-container ${this.state.mounted ? 'show-about' : null} page`}>
        <AboutMyself />
        <ContactInfo />
        <div>Resume-cv</div>
      </div>
    );
  }
}

export default About;
