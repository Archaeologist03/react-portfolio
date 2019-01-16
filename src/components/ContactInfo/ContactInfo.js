import React from 'react';

import './ContactInfo.scss';

function ContactInfo(props) {
  return (
    <div className="contact-info-container">
      <div className="contact-info-container__email-container">
        <p className="contact-info-container__email-container__email">
          <span className="label">Email: </span>
          <a
            href="mailto:omniiknight.com"
            className="address"
            target="_blank"
            rel="noopener noreferrer">
            omniiknight@hotmail.com
          </a>
        </p>
      </div>
      {/* <div className="contact-info-container__linkedin-container">
        <span className="label">LinkedIn: </span>
        <a
          href="https://www.linkedin.com/in/ilija-savic-03/"
          className="address"
          target="_blank"
          rel="noopener noreferrer">
          https://www.linkedin.com/in/ilija-savic-03/
        </a>
      </div> */}
    </div>
  );
}

export default ContactInfo;
