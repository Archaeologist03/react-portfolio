import React from 'react';
// import Emoji from 'react-emoji-render';

import './AboutMyself.scss';

function AboutMyself() {
	return (
		<div className='about-myself-container'>
			<h4 className='about-myself-container__text'>
				<span className='hello-there'>Hello there, I am Ilija</span>
				<br />
				<br />- I am a{' '}
				<span className='about-myself-container__text--bolded'>
					JavaScript
				</span>{' '}
				developer, mainly working with{' '}
				<span className='about-myself-container__text--bolded'>React </span>
				and{' '}
				<span className='about-myself-container__text--bolded'>
					Node(Express)
				</span>
				.
				<br />- Beside{' '}
				<span className='about-myself-container__text--bolded'> MERN</span>{' '}
				stack, I am peeking at{' '}
				<span className='about-myself-container__text--bolded'> Python</span>{' '}
				and <span className='about-myself-container__text--bolded'> PHP</span>{' '}
				code. I am also highly interested in mobile development and currently
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
