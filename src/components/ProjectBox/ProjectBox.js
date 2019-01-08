import React from 'react';

import './ProjectBox.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function ProjectBox(props) {
  return (
    <div className="project-box-container">
      <div className="project-box-container__image-container">
        <img src={props.img} alt="" />
      </div>
      <div className="project-box-container__project-text-container">
        <p>Some text baut project</p>
      </div>
      <div className="project-box-container__icons-container">
        <a href={props.siteUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="project-box-container__icons-container--site-icon"
            icon={faGlobe}
            size="5x"
          />
        </a>
        <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
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
