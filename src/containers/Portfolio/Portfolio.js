import React from "react";

import "./Portfolio.scss";

import ProjectBox from "../../components/ProjectBox/ProjectBox";

import imgs from "../../utils/imgImports";

import { specificLinks } from "../../utils/links";

import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

const movieSearchTechUsedProps = {
  icons: [faReact, faSass],
  iconsClassNames: ["react", "sass"],
};

const fccPortfolioTechUsedProps = {
  icons: [faReact, faSass, faJs],
  iconsClassNames: ["react", "sass", "javascript"],
};

const githubCardTechUsedProps = {
  icons: [faReact, faSass],
  iconsClassNames: ["react", "sass"],
};

function Portfolio() {
  return (
    <div className="portfolio-container page">
      <div className="portfolio-container__project-boxes-container">
        <div className="portfolio-container__project-boxes-container__project-boxes">
          <ProjectBox
            img={imgs.movieSearchImg}
            siteUrl={specificLinks.movieSearchSite}
            githubUrl={specificLinks.movieSearchGithub}
            techUsedProps={movieSearchTechUsedProps}
            projectText={"Some text that needs to be updated..about movie seracher"}
            projectName="Movie Searcher"
          />
          <ProjectBox
            img={imgs.fccPortfolioImg}
            siteUrl={specificLinks.fccPortfolioSite}
            githubUrl={specificLinks.fccPortfolioGithub}
            techUsedProps={fccPortfolioTechUsedProps}
            projectText={"Some text that needs to be updated.."}
            projectName="Portfolio"
          />
          <ProjectBox
            img={imgs.githubCardImg}
            siteUrl={specificLinks.githubCardSite}
            githubUrl={specificLinks.githubCardGithub}
            techUsedProps={githubCardTechUsedProps}
            projectText={"Some text that needs to be updated.."}
            projectName="Github Card"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
