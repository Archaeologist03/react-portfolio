// =========== REACT IMPORTS ===============
import React, { Component } from 'react';

// =========== STATIC IMPORTS ==============
import backgroundImg from './static/assets/images/header-hero.jpg';

// =========== LAYOUT/GLOBALS IMPORTS ======
import './layout/global.scss';

// =========== COMPONENT IMPORTS ===========
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>If your feet got cemented, make concrete move!</h1>
        <Background img={backgroundImg} />

        <Footer />
      </div>
    );
  }
}

export default App;
