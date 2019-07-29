import React from 'react';

import './Footer.scss';

import Icon from '../Icon/Icon';

// ======= Links & icons(images) ========
import { links } from '../../utils/links';

import imgs from '../../utils/imgImports';

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <Icon
        whichIcon='github-icon'
        linkUrl={links.github}
        faIcon={faGithubSquare}
      />
      <Icon
        whichIcon='linkedIn-icon'
        linkUrl={links.linkedin}
        faIcon={faLinkedin}
      />
      <Icon whichIcon='fcc-icon' linkUrl={links.fcc} faIcon={faFreeCodeCamp} />
      <Icon
        whichIcon='codewars-icon'
        linkUrl={links.codewars}
        iconImg={{
          png: imgs.codewarsIcon,
          webp: imgs.webpImgs.codewarsIconWebp,
        }}
      />
    </div>
  );
}

export default Footer;
