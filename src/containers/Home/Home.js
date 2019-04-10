import React from 'react';

import './Home.scss';

import Skills from './Skills/Skills';
import SphereGif from './SphereGif/SphereGif';

function Home() {
  return (
    <div className='home-container page'>
      <div className='home-container__skills-container'>
        <Skills />
      </div>
      <header>
        <SphereGif />
      </header>
    </div>
  );
}

export default Home;
