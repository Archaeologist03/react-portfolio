import React from "react";

import "./ProjectBox.scss";

import TechUsed from "./TechUsed/TechUsed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function ProjectBox(props) {
  return (
    <div className="project-box-container">
      <div className="project-box-container__tech-used-container">
        <TechUsed techUsedProps={props.techUsedProps} size={"4x"} />
      </div>
      <div className="project-box-container__image-container">
        <img src={props.img} alt="" />
      </div>
      <div className="project-box-container__project-text-container">
        <p className="project-box-container__project-text-container__text">
          Some text baut project
        </p>
      </div>
      <div className="project-box-container__icons-container">
        <a href={props.siteUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="project-box-container__icons-container--site-icon project-box-icons"
            icon={faGlobe}
            size="5x"
          />
        </a>
        <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="project-box-container__icons-container--github-icon project-box-icons"
            icon={faGithubSquare}
            size="5x"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
