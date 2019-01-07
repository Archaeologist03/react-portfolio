import React from 'react';

import './ProjectBox.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


function ProjectBox(props) {
  return (
    <div className="project-box-container">
      <div className="project-box-container__image-container">
        <img src="" alt="" />
      </div>
      <div className="project-box-container__project-text-container" />
      <div className="project-box-container__icons-container">
        <a href={props.siteUrl}>
          <FontAwesomeIcon
            className="project-box-container__icons-container--site-icon"
            icon={faGlobe}
            size="5x"
          />
        </a>
        <a href={props.githubUrl}>
          <FontAwesomeIcon
            className="project-box-container__icons-container--github-icon"
            icon={faGithubSquare}
            size="5x"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
