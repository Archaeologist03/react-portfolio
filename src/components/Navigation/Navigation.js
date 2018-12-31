import React from 'react';

import './Navigation.scss';

import NavItem from './NavItem/NavItem';

function Navigation(props) {
  return (
    <div className="navigation-container">
      <div className="navigation-container__nav-items-container">
        <NavItem linkTo="/about">About</NavItem>
        <NavItem linkTo="/portfolio">Portfolio</NavItem>
      </div>
    </div>
  );
}

export default Navigation;
