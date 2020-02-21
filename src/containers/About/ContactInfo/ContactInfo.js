import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Tooltip from '../../../components/Tooltip/Tooltip';

import './ContactInfo.scss';

function ContactInfo() {
	return (
		<Tooltip
			tooltipText='Email'
			style={{
				color: 'rgba(14, 167, 255, 0.911)',
				textShadow: '2px 2px rgba(192, 62, 224, 0.133)',
			}}>
			<div className='email-container'>
				<a
					href='mailto:ilija3one9@gmail.com'
					className='email-container__link'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>
		</Tooltip>
	);
}

export default ContactInfo;
