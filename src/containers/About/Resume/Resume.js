import React from 'react';

import './Resume.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';

function Resume() {
	return (
		<div className='resume-container'>
			<a
				className='resume-container__link'
				href='https://drive.google.com/open?id=16vjkVhoFuoXXgGUEeyIato5I1Wm5CpwL'
				target='_blank'
				rel='noopener noreferrer'>
				<FontAwesomeIcon icon={faScroll} />
			</a>
		</div>
	);
}

export default Resume;
