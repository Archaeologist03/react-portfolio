import React from 'react';

import './SphereGif.scss';

// import SphereGifImg from "../../../static/assets/images/sphere-gif.gif";

function SphereGif() {
	return (
		<div className='sphere-gif-container'>
			{/* <img src={SphereGifImg} alt="" />
      <div className="sphere-gif-container__overlay" /> */}
			<h1 className='sphere-gif-container__header'>
				<span className='name-span'> Ilija Savic</span>
				<span className='position-span'>JavaScript Developer</span>
			</h1>
		</div>
	);
}

export default SphereGif;
