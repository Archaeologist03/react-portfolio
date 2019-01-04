import React from 'react'

import './SphereGif.scss';

import SphereGifImg from '../../../static/assets/images/sphere-gif.gif';

function SphereGif() {
  return (
    <div className="sphere-gif-container">
      <img src={SphereGifImg} alt="" />
      <div className="sphere-gif-container__overlay"></div>
      <h1 className="sphere-gif-container__header">Ilija Savic <span className="position-span">Front-end Developer</span></h1>
    </div>
  )
}

export default SphereGif
