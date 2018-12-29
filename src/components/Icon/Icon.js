import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Icon.scss';

function Icon(props) {
  return (
    <div className="icon-container">
      <a className={`icon-container__link ${props.iconImg ? 'image-link': null}`} href={props.linkUrl} target="blank">
        {props.iconImg ? (
          <img className="icon-container__iconImage image" src={props.iconImg} alt="" />
        ) : (
          <FontAwesomeIcon
            className="icon-container__iconImage icon"
            icon={props.faIcon}
            size="5x"
          />
        )}
      </a>
    </div>
  );
}

export default Icon;
