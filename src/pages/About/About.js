import React from 'react';

import './About.scss';

import AboutMyself from './AboutMyself/AboutMyself';
import Email from './Email/Email';
import Resume from './Resume/Resume';
import Interests from './Interests/Interests';
import Skills from './Skills/Skills';

function About() {
	return (
		<div className={`about-container page`}>
			<div className='about-container__info-container'>
				<div className='about-container__info-container__contacts-container'>
					<div className='about-container__info-container__email-container info-containers'>
						<Email />
					</div>

					<div className='about-container__info-container__resume-container info-containers'>
						<Resume />
					</div>
				</div>

				<div className='about-container__info-container__about-myself-container info-containers'>
					<AboutMyself />
				</div>

				<div className='about-container__info-container__skills-container info-containers'>
					<Skills />
				</div>

				<div className='about-container__info-container__interests-container info-containers'>
					<Interests />
				</div>
			</div>
		</div>
	);
}

export default About;
