import React, { Fragment } from 'react';

import './Tooltip.scss';

const Tooltip = props => {
	return (
		<span className='tooltip'>
			{props.children}
			<span className='tooltiptext' style={{ ...props.style }}>
				{props.tooltipText}
			</span>
		</span>
	);
};

export default Tooltip;
