import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

import imgs from '../../utils/imgImports';

function Logo(props) {
  return (
    <div className='logo-container'>
      <Link className='logo-container__link' to='/'>
        <picture>
          <source srcSet={imgs.webpImgs.logoWebp} type='image/webp' />
          <img className='logo-container__img' src={imgs.logo} alt='logo' />
        </picture>

        {/* <img className='logo-container__img' src={imgs.logo} alt='logo' /> */}
      </Link>
    </div>
  );
}

export default Logo;
