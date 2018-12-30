import React from 'react';

import './Footer.scss';

import Icon from '../Icon/Icon';

// ======= Links & icons(images) ========
import { links } from '../../utils/links';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import codewarsIcon from '../../static/assets/images/codewars-icon.png';


function Footer() {
  return (
    <div className="footer-container">
      <Icon
        whichIcon="github-icon"
        linkUrl={links.github}
        faIcon={faGithubSquare}
      />
      <Icon
        whichIcon="linkedin-icon"
        linkUrl={links.linkedin}
        faIcon={faLinkedin}
      />
      <Icon 
        whichIcon="fcc-icon" 
        linkUrl={links.fcc} 
        faIcon={faFreeCodeCamp} 
      />
      <Icon
        whichIcon="codewars-icon"
        linkUrl={links.codewars}
        iconImg={codewarsIcon}
      />
    </div>
  );
}

export default Footer;
