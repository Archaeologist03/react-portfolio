import React from 'react';

import './Portfolio.scss';

import ProjectBox from '../../components/ProjectBox/ProjectBox';

import imgs from '../../utils/imgImports';

// === LINKS TO SOCIALS/PROJECTS
import { specificLinks } from '../../utils/links';

// === ICONS IMPORTS ===
import {
	faReact,
	faSass,
	faCss3,
	faJs,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

// const ProjectBox = React.lazy(() =>
//   import('../../components/ProjectBox/ProjectBox'),
// );

// ==== PROJECT ICONS / USED TECH ====
const movieSearchTechUsedProps = {
	icons: [faReact, faSass],
	iconsClassNames: ['react', 'sass'],
};

const fccPortfolioTechUsedProps = {
	icons: [faReact, faSass, faJs],
	iconsClassNames: ['react', 'sass', 'javascript'],
};

const reactTodoTechUsedProps = {
	icons: [faReact, faSass, faJs, faNodeJs, faDatabase],
	iconsClassNames: ['react', 'sass', 'javascript', 'node', 'mongodb'],
};

const devConnectorTechUsedProps = {
	icons: [faReact, faJs, faNodeJs, faDatabase],
	iconsClassNames: ['react', 'javascript', 'node', 'mongodb'],
};

const nasaExplorerTechUsedProps = {
	icons: [faReact, faSass],
	iconsClassNames: ['react', 'sass'],
};

const quoteMachineTechUsedProps = {
	icons: [faReact, faCss3],
	iconsClassNames: ['react', 'css'],
};

function Portfolio() {
	return (
		<div className='portfolio-container page'>
			<div className='portfolio-container__project-boxes-container'>
				<div className='portfolio-container__project-boxes-container__project-boxes'>
					{/* <React.Suspense fallback={<div>Loading...</div>}> */}
					<ProjectBox
						img={imgs.taskerImg}
						webpImg={imgs.webpImgs.taskerImgWebp}
						siteUrl={specificLinks.reactTodoSite}
						githubUrl={specificLinks.reactTodoGithub}
						backendGithubUrl={specificLinks.reactTodoGithubBackend}
						techUsedProps={reactTodoTechUsedProps}
						projectText={'Full-stack MERN app with CRUD operations.'}
						projectName='Tasker'
					/>
					<ProjectBox
						projectClass={`project-1-container`}
						img={imgs.movieSearchImg}
						webpImg={imgs.webpImgs.movieSearchImgWebp}
						siteUrl={specificLinks.movieSearchSite}
						githubUrl={specificLinks.movieSearchGithub}
						techUsedProps={movieSearchTechUsedProps}
						projectText={
							'SPA application that presents more specific data for searched movie.'
						}
						projectName='Movie Searcher'
					/>
					<ProjectBox
						img={imgs.fccPortfolioImg}
						webpImg={imgs.webpImgs.fccPortfolioImgWebp}
						siteUrl={specificLinks.portfolioSite}
						githubUrl={specificLinks.portfolioGithub}
						techUsedProps={fccPortfolioTechUsedProps}
						projectText={'Personal portfolio of mine.'}
						projectName='Portfolio'
					/>
					<ProjectBox
						img={imgs.devConnectorImg}
						webpImg={imgs.webpImgs.devConnectorWebp}
						siteUrl={specificLinks.devConnectorSite}
						githubUrl={specificLinks.devConnectorGithub}
						techUsedProps={devConnectorTechUsedProps}
						projectText={
							'MERN that has helps developers make connections with other developers.'
						}
						projectName='Dev-Connector'
					/>
					<ProjectBox
						img={imgs.quoteMachineImg}
						webpImg={imgs.webpImgs.quoteMachineImgWebp}
						siteUrl={specificLinks.quoteMachineSite}
						githubUrl={specificLinks.quoteMachineGithub}
						techUsedProps={quoteMachineTechUsedProps}
						projectText={
							'Uses goodreads API to fetch quotes based on user input.'
						}
						projectName='Quote Machine'
					/>
					<ProjectBox
						img={imgs.nasaExplorerImg}
						webpImg={imgs.webpImgs.nasaExplorerWebp}
						siteUrl={specificLinks.nasaExplorerSite}
						githubUrl={specificLinks.nasaExplorerGithub}
						techUsedProps={nasaExplorerTechUsedProps}
						projectText={
							'React project with Typescript that uses NASA API for data'
						}
						projectName='Nasa Explorer'
					/>
					{/* </React.Suspense> */}
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
