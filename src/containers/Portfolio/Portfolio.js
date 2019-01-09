import React from 'react';

import './Portfolio.scss';

import ProjectBox from '../../components/ProjectBox/ProjectBox';

import movieSearchImg from '../../static/assets/images/movie-search-react.png';

import { specificLinks } from '../../utils/links';

function Portfolio() {
  return (
    <div className="portfolio-container page">
      <div className="portfolio-container__project-boxes-container">
        <ProjectBox
          img={movieSearchImg}
          siteUrl={specificLinks.movieSearchSite}
          githubUrl={specificLinks.movieSearchGithub}
        />
        <ProjectBox
          img={movieSearchImg}
          siteUrl={specificLinks.movieSearchSite}
          githubUrl={specificLinks.movieSearchGithub}
        />
      </div>
    </div>
  );
}

export default Portfolio;
