import React from 'react'

import './SphereGif.scss';

import SphereGifImg from '../../../static/assets/images/sphere-gif.gif';

function SphereGif() {
  return (
    <div className="sphere-gif-container">
      <img src={SphereGifImg} alt="" />
    </div>
  )
}

export default SphereGif
