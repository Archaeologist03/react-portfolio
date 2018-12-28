import React from 'react';

import './Footer.scss';

import Icon from '../Icon/Icon';

// ======= Links & Images ========
import codewarsIcon from '../../static/assets/images/codewars-icon.png';
import { codewarsLink } from '../../utils/links';


function Footer() {
  return (
    <div className="footer-container">
      <Icon linkUrl={codewarsLink} iconImg={codewarsIcon} />
      <Icon linkUrl={codewarsLink} iconImg={codewarsIcon} />
    </div>
  );
}

export default Footer;
