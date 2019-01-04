import React from 'react';

import './Background.scss';

import Particles from './ParticlesBG/ParticlesBG' 
// import SphereGif from '../../containers/Home/SphereGif/SphereGif';

function Background(props) {
  return (
    <div className="background-container">
      <img className="background-container__image" src={props.img} alt="background" />
      <div className="background-container__overlay"></div>
      <Particles />
      {/* <SphereGif /> */}
    </div>
  );
}

export default Background;

