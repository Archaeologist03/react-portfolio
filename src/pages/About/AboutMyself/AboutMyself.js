import React from 'react';

import './AboutMyself.scss';

function AboutMyself() {
	return (
		<div className='about-myself-container'>
			<h4 className='about-myself-container__text'>
				<span className='hello-there'>Hello there, I am Ilija</span>
				<br />
				<br /> I've been using cryptic words to build moving stuff on the
				internet for past 2 years.
				<br />
				It's a journey{' '}
				<span className='about-myself-container__text--bolded'>
					JavaScript{' '}
				</span>{' '}
				and <span className='about-myself-container__text--bolded'>I </span>{' '}
				undertook, oh and we got{' '}
				<span className='about-myself-container__text--bolded'>React </span> and{' '}
				<span className='about-myself-container__text--bolded'>Node </span> in a
				beatseats.
				<br /> We're planning to make another stop in a bit, and pickup JSes
				cousin Python, or React's lil bro Nathan.
				<br />
			</h4>
		</div>
	);
}

export default AboutMyself;
