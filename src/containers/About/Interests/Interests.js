import React from 'react';

import './Interests.scss';

function Interests() {
	return (
		<div className='interests-container'>
			<span className='title'>Hobbies and Interests:</span>
			<div>
				<span className='dash'>-</span> Reading
				<br />
				<span className='dash'>-</span> Basketball
				<br />
				<span className='dash'>-</span> Can sciencey
				neuro-space-psychology-cinema-meaning stuff, videos be considered as an
				interest?
			</div>
			<span className='dash'>-</span> I like to write now and then.
			<br />
		</div>
	);
}

export default Interests;
