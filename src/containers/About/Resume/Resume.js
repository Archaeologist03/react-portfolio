import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';

import Tooltip from '../../../components/Tooltip/Tooltip';

import './Resume.scss';

function Resume() {
	return (
		<Tooltip
			tooltipText='Resume'
			style={{
				color: 'rgba(231, 255, 14, 0.911)',
				textShadow: '2px 2px rgba(192, 62, 224, 0.133)',
			}}>
			<div className='resume-container'>
				<a
					className='resume-container__link'
					href='https://drive.google.com/file/d/1wVYdlp89wxWMO9wrjBcqamt-K8YK7pnv/view'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon icon={faScroll} />
				</a>
			</div>
		</Tooltip>
	);
}

export default Resume;
