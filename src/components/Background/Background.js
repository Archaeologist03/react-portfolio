import React from 'react';

import './Background.scss';

import Particles from './ParticlesBG/ParticlesBG';
// import SphereGif from '../../containers/Home/SphereGif/SphereGif';

function Background(props) {
  return (
    <div className="background-container">
        <img
          className="background-container__image"
          src={props.img}
          alt="background"
          height="100%"
        />
      <div className="background-container__overlay" />
      <Particles />
      {/* <SphereGif /> */}
    </div>
  );
}

export default Background;
