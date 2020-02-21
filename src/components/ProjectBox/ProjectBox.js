import React, { useState } from 'react';

import './ProjectBox.scss';

import TechUsed from './TechUsed/TechUsed';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function ProjectBox(props) {
	const [isImageHovered, setIsImageHovered] = useState(false);

	const handleImageHover = hovered => {
		setTimeout(() => {
			setIsImageHovered(hovered);
		}, 300);
	};

	return (
		<div className={`project-box-container`}>
			<div className='project-box-container__tech-used-container'>
				<TechUsed techUsedProps={props.techUsedProps} size={'4x'} />
			</div>
			<div
				onMouseEnter={() => handleImageHover(true)}
				onMouseLeave={() => handleImageHover(false)}
				className='project-box-container__image-container'>
				<div className='project-box-container__image-container__overlay'>
					<h3>{props.projectName}</h3>
				</div>
				<a
					className={isImageHovered ? 'hovered-image' : 'unhovered-image'}
					href={props.siteUrl}
					target='_blank'
					rel='noopener noreferrer'>
					<picture>
						<source srcSet={props.webpImg} type='image/webp' />
						<img src={props.img} alt='Project' />
					</picture>
				</a>
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
