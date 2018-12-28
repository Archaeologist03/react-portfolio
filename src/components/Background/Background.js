import React from 'react';

import './Background.scss';

import Particles from './ParticlesBG/ParticlesBG'

function Background(props) {
  return (
    <div className="background-container">
      <img className="background-container__image" src={props.img} alt="background" />
      <div className="background-container__overlay"></div>
      <Particles />
    </div>
  );
}

export default Background;

