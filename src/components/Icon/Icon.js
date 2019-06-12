import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Icon.scss';

function Icon(props) {
  return (
    <div className='icon-container'>
      <a
        className={`icon-container__link ${props.iconImg ? 'image-link' : ''}`}
        aria-label={props.whichIcon}
        href={props.linkUrl}
        target='_blank'
        rel='noopener noreferrer'>
        {props.iconImg ? (
          <picture>
            <source srcSet={props.iconImg.webp} type='image/webp' />
            <img
              className='icon-container__iconImage image'
              aria-label={props.whichIcon}
              src={props.iconImg.png}
              alt=''
            />
          </picture>
        ) : (
          <FontAwesomeIcon
            className={`icon-container__iconImage icon ${props.whichIcon}`}
            icon={props.faIcon}
            size='5x'
          />
        )}
      </a>
    </div>
  );
}

export default Icon;
