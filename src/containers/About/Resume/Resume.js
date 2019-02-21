import React from 'react';

import './Resume.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (
    <div className="resume-container">
      <a  className="resume-container__link" href="#" target="_blank">
        <FontAwesomeIcon icon={faScroll} />
      </a>
    </div>
  );
}

export default Resume;
