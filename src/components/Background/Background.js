import React from 'react';

import backgroundHeaderWebp from '../../static/assets/images/webp/header-hero.webp';

import './Background.scss';

// import Particles from './ParticlesBG/ParticlesBG';
// import SphereGif from '../../containers/Home/SphereGif/SphereGif';

function Background() {
  return (
    <div className='background-container'>
      <picture>
        <source
          srcSet={backgroundHeaderWebp}
          // srcSet='https://doc-0k-9s-docs.googleusercontent.com/docs/securesc/a4at6strlb6gqumafl3667uv4flrcv7g/v9df9tr63m3t4np9rc4aa6vpe2hi0ael/1559311200000/15700540241231460852/15700540241231460852/1tC7b3zHd5BcDu9AjmtCyHWfNLjH_LBfP?e=view'
          // media={'(min-width: 568px)'}
          type='image/webp'
        />
        <img
          className='background-container__image'
          // src={props.img}
          src='https://doc-04-9s-docs.googleusercontent.com/docs/securesc/a4at6strlb6gqumafl3667uv4flrcv7g/abuej8uq7aqcnliv7o36olm2hh202cu3/1559311200000/15700540241231460852/15700540241231460852/11PP8G4ethf4lCmrcHpqHFMPoEOKxqSo4?e=view'
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
