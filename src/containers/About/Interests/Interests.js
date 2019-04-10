import React from 'react';

import './Interests.scss';

function Interests() {
  return (
    <div className='interests-container'>
      <span className='title'>Hobbies and Interests:</span>
      <div>
        {/* <br /> */}
        <span className='dash'>-</span> Reading
        <br />
        <span className='dash'>-</span> Basketball
        <br />
        <span className='dash'>-</span> Can sciencey neuro-space-psychology
        videos be considered as an interest?
      </div>
    </div>
  );
}

export default Interests;
