import React from 'react';

import './ProjectBox.scss';

import TechUsed from './TechUsed/TechUsed';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function ProjectBox(props) {
  return (
    <div className='project-box-container'>
      <div className='project-box-container__tech-used-container'>
        <TechUsed techUsedProps={props.techUsedProps} size={'4x'} />
      </div>
      <div className='project-box-container__image-container'>
        <div className='project-box-container__image-container__overlay'>
          <h3>{props.projectName}</h3>
        </div>
        <picture>
          <source srcSet={props.webpImg} type='image/webp' />
          <img src={props.img} alt='' />
        </picture>
        <img src={props.img} alt='' />
      </div>
      <div className='project-box-container__project-text-container'>
        <p className='project-box-container__project-text-container__text'>
          {props.projectText}
        </p>
      </div>
      <div className='project-box-container__icons-container'>
        {props.backendGithubUrl ? (
          <a
            href={props.backendGithubUrl}
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon
              className='project-box-container__icons-container--github-icon project-box-icons backend-github-icon'
              icon={faGithubSquare}
              size='5x'
            />
          </a>
        ) : null}

        <a href={props.siteUrl} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon
            className='project-box-container__icons-container--site-icon project-box-icons'
            icon={faGlobe}
            size='5x'
          />
        </a>
        <a href={props.githubUrl} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon
            className='project-box-container__icons-container--github-icon project-box-icons'
            icon={faGithubSquare}
            size='5x'
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
