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

// ==== PROJECT ICONS / USED TECH ====
const movieSearchTechUsedProps = {
  icons: [faReact, faSass],
  iconsClassNames: ['react', 'sass'],
};

const fccPortfolioTechUsedProps = {
  icons: [faReact, faSass, faJs],
  iconsClassNames: ['react', 'sass', 'javascript'],
};

const githubCardTechUsedProps = {
  icons: [faReact, faSass],
  iconsClassNames: ['react', 'sass'],
};

const reactTodoTechUsedProps = {
  icons: [faReact, faSass, faJs, faNodeJs, faDatabase],
  iconsClassNames: ['react', 'sass', 'javascript', 'node', 'mongodb'],
};

const smartBrainTechUsedProps = {
  icons: [faReact, faCss3, faJs, faNodeJs, faDatabase],
  iconsClassNames: ['react', 'css', 'javascript', 'node', 'postgres'],
};

const quoteMachineTechUsedProps = {
  icons: [faReact, faCss3],
  iconsClassNames: ['react', 'css'],
};

class Portfolio extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     mounting: false,
  //   };
  // }

  // componentDidUpdate() {
  //   console.log('port updated');
  // }

  // componentWillMount() {
  //   console.log('port will mount');
  //   this.setState({ mounting: true });
  // }

  // componentWillUnmount() {
  //   console.log('port will unmount');
  //   this.setState({ mounting: false });
  // }

  render() {
    return (
      <div className='portfolio-container page'>
        <div className='portfolio-container__project-boxes-container'>
          <div className='portfolio-container__project-boxes-container__project-boxes'>
            <ProjectBox
              img={imgs.taskerImg}
              webpImg={imgs.webpImgs.taskerImgWebp}
              siteUrl={specificLinks.reactTodoSite}
              githubUrl={specificLinks.reactTodoGithub}
              backendGithubUrl={specificLinks.reactTodoGithubBackend}
              techUsedProps={reactTodoTechUsedProps}
              projectText={'Full-stack MERN app with basic CRUD operations.'}
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
              projectText={'Personal portfolio of mine. This one.'}
              projectName='Portfolio'
            />
            <ProjectBox
              img={imgs.smartBrainImg}
              webpImg={imgs.webpImgs.smartBrainImgWebp}
              siteUrl={specificLinks.smartBrainSite}
              githubUrl={specificLinks.smartBrainGithub}
              backendGithubUrl={specificLinks.smartBrainGithubBackend}
              techUsedProps={smartBrainTechUsedProps}
              projectText={'Full-stack face recognition application.'}
              projectName='Smart Brain'
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
              img={imgs.githubCardImg}
              webpImg={imgs.webpImgs.githubCardImgWebp}
              siteUrl={specificLinks.githubCardSite}
              githubUrl={specificLinks.githubCardGithub}
              techUsedProps={githubCardTechUsedProps}
              projectText={
                'Displays searched github user info by fetching github API data.'
              }
              projectName='Github Card'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
