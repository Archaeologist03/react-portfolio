import React from 'react';

import './TechUsed.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TechUsed(props) {
	const mappedData = props.techUsedProps.icons.map((icon, i) => {
		return (
			<FontAwesomeIcon
				className={`tech-used-container__icons ${props.techUsedProps.iconsClassNames[i]}`}
				icon={icon}
				size={props.size}
				key={props.techUsedProps.iconsClassNames[i]}
			/>
		);
	});

	return <div className='tech-used-container'>{mappedData}</div>;
}

export default TechUsed;
