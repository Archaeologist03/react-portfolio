import React from 'react';

import './About.scss';

import AboutMyself from './AboutMyself/AboutMyself';
import ContactInfo from './ContactInfo/ContactInfo';
import Resume from './Resume/Resume';
import Interests from './Interests/Interests';
import Learning from './Learning/Learning';

function About() {
  return (
    <div className={`about-container page`}>
      <div className='about-container__info-container'>
        <div className='about-container__info-container__contacts-container'>
          <div className='about-container__info-container__contact-info-container info-containers'>
            <ContactInfo />
          </div>

          <div className='about-container__info-container__resume-container info-containers'>
            <Resume />
          </div>
        </div>

        <div className='about-container__info-container__about-myself-container info-containers'>
          <AboutMyself />
        </div>

        <div className='about-container__info-container__learning-container info-containers'>
          <Learning />
        </div>

        <div className='about-container__info-container__interests-container info-containers'>
          <Interests />
        </div>
      </div>
    </div>
  );
}

export default About;
