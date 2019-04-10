import React from 'react';

import backgroundHeaderWebp from '../../static/assets/images/webp/header-hero.webp';

import './Background.scss';

// import Particles from './ParticlesBG/ParticlesBG';
// import SphereGif from '../../containers/Home/SphereGif/SphereGif';

function Background(props) {
  return (
    <div className='background-container'>
      <picture>
        <source srcSet={backgroundHeaderWebp} type='image/webp' />
        <img
          className='background-container__image'
          src={props.img}
          alt='background'
          // height="100%"
        />
      </picture>

      <div className='background-container__overlay' />
      {/* <Particles /> */}
      {/* <SphereGif /> */}
    </div>
  );
}

export default Background;
