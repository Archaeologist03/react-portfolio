import React from 'react'

import './Skills.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ======= Links & icons(images) ========
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faNpm } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function Skills() {
  return (
    <div className="skills-container">
      <FontAwesomeIcon
        className="skill-icon html-icon"
        icon={faHtml5}
        size="7x"
      />
      <FontAwesomeIcon
        className="skill-icon css-icon"
        icon={faCss3Alt}
        size="7x"
      />
      <FontAwesomeIcon
        className="skill-icon javascript-icon"
        icon={faJsSquare}
        size="7x"
      />
      <FontAwesomeIcon 
        className="skill-icon npm-icon" 
        icon={faNpm} 
        size="7x" 
      />
      <FontAwesomeIcon
        className="skill-icon sass-icon"
        icon={faSass}
        size="7x"
      />
      <FontAwesomeIcon
        className="skill-icon react-icon"
        icon={faReact}
        size="7x"
      />
    </div>
  )
}

export default Skills
