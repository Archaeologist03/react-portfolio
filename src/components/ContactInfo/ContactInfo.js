import React from 'react';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { links } from '../../utils/links';

import './ContactInfo.scss';

import Icon from '../Icon/Icon';

function ContactInfo(props) {
  return (
    <div className="contact-info-container">
      <div className="contact-info-container__email-container">
        <span>Email: </span>
        <span>Omniiknight@hotmail.com </span>
      </div>
      <div className="contact-info-container__linkedin-container">
        <span>LinkedIn: </span>
        <span>
          <Icon
            whichIcon="linkedin-icon"
            linkUrl={links.linkedin}
            faIcon={faLinkedin}
          />
        </span>
      </div>
    </div>
  );
}

export default ContactInfo;
