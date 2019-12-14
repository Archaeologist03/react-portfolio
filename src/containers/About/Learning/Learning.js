import React from 'react';

import './Learning.scss';

function Learning() {
	return (
		<div className='learning-container'>
			<div className='learning-container__skills-container' />
			<h4 className='learning-container__skills-container__title learning-title'>
				Skills:
			</h4>
			<ul className='learning-container__skills-container__skills-list'>
				<li>- JavaScript (ES6+)</li>
				<li>- React</li>
				<li>- Redux</li>
				<li>- NodeJS (Express)</li>
				<li>- MongoDB (Mongoose)</li>
				<li>- CSS (SCSS)</li>
				<li>- HTML</li>
				<li>- Git</li>
			</ul>
			<div />
			<div className='learning-container__to-learn-container'>
				<h4 className='learning-container__to-learn-container__title learning-title'>
					Would like to learn:
				</h4>
				<p>React Native/Flutter, Python</p>
			</div>
		</div>
	);
}

export default Learning;
