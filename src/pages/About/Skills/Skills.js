import React from 'react';

import './Skills.scss';

function Learning() {
	return (
		<div className='skills-container'>
			<h4 className='skills-container__title skills-title'>Skills:</h4>

			<ul className='skills-container__skills-list'>
				<li>- JavaScript (TypeScript)</li>
				<li>- React</li>
				<li>- Redux</li>
				<li>- Jest</li>
				<li>- styled-components</li>
				<li>- NodeJS (Express)</li>
				<li>- MongoDB (Mongoose)</li>
				<li>- HTML</li>
				<li>- CSS</li>
				<li>- SASS</li>
				<li>- Git</li>
			</ul>
		</div>
	);
}

export default Learning;
