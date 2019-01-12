import React from "react";

import "./Portfolio.scss";

import ProjectBox from "../../components/ProjectBox/ProjectBox";

import imgs from "../../utils/imgImports";

import { specificLinks } from "../../utils/links";

function Portfolio() {
  return (
    <div className="portfolio-container page">
      <div className="portfolio-container__project-boxes-container">
        <ProjectBox
          img={imgs.movieSearchImg}
          siteUrl={specificLinks.movieSearchSite}
          githubUrl={specificLinks.movieSearchGithub}
        />
        <ProjectBox
          img={imgs.fccPortfolioImg}
          siteUrl={specificLinks.fccPortfolioSite}
          githubUrl={specificLinks.fccPortfolioGithub}
        />
        <ProjectBox
          img={imgs.githubCardImg}
          siteUrl={specificLinks.githubCardSite}
          githubUrl={specificLinks.githubCardGithub}
        />
      </div>
    </div>
  );
}

export default Portfolio;
