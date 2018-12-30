// =========== REACT IMPORTS ===============
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// =========== FONT AWESOME ================

// =========== STATIC IMPORTS ==============
import backgroundImg from './static/assets/images/header-hero.jpg';

// =========== LAYOUT/GLOBALS IMPORTS ======
import './layout/global.scss';

// =========== COMPONENT IMPORTS ===========
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Home from './containers/Home/Home';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Logo />
          <h1>If your feet got cemented, make concrete move!</h1>
          <Background img={backgroundImg} />
          <Footer />

          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
