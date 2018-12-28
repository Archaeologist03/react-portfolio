import React from 'react';

import './Icon.scss';

function Icon(props) {
  return (
    <div className="icon-container">
      <a className="icon-container__link" href={props.linkUrl} target="blank">
        <img className="icon-container__image" src={props.iconImg} alt="" />
      </a>
    </div>
  );
}

export default Icon;
