import React from 'react';
// import Emoji from 'react-emoji-render';

import './AboutMyself.scss';

function AboutMyself() {
	return (
		<div className='about-myself-container'>
			<h4 className='about-myself-container__text'>
				<span className='hello-there'>Hello there, I am Ilija</span>
				<br />
				<br />- I am a JavaScript developer, mainly working with{' '}
				<span className='about-myself-container__text--bolded'>React </span>
				and{' '}
				<span className='about-myself-container__text--bolded'>
					Node(Express)
				</span>
				.
				<br />- Beside{' '}
				<span className='about-myself-container__text--bolded'> MERN</span>{' '}
				stack, I would love to learn{' '}
				<span className='about-myself-container__text--bolded'> Python</span>,
				and I am also highly interested in mobile development and currently
				learning{' '}
				<span className='about-myself-container__text--bolded'>
					React Native
				</span>
				.
				<br />
			</h4>
		</div>
	);
}

export default AboutMyself;
