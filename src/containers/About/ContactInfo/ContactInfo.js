import React from 'react';

import './ContactInfo.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactInfo(props) {
	return (
		<div className='contact-info-container'>
			<div className='contact-info-container__email-container'>
				<a
					href='mailto:ilija3one9@gmail.com'
					className='contact-info-container__email-container__link'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>
		</div>
	);
}

export default ContactInfo;
