import React from 'react';

import './Footer.scss';

import Icon from '../Icon/Icon';

// ======= Links & Images ========
import codewarsIcon from '../../static/assets/images/codewars-icon.png';
import { links } from '../../utils/links';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer-container">
      <Icon linkUrl={links.github} faIcon={faGithubSquare} />
      <Icon linkUrl={links.linkedin} faIcon={faLinkedin} />
      <Icon linkUrl={links.ffc} faIcon={faFreeCodeCamp} />
      <Icon linkUrl={links.codewars} iconImg={codewarsIcon} />
    </div>
  );
}

export default Footer;
