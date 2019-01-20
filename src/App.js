// =========== REACT IMPORTS ===============
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

// =========== STYLES ======================
import './App.scss';

// =========== STATIC IMPORTS ==============
import backgroundImg from './static/assets/images/header-hero.jpg';

// =========== LAYOUT/GLOBALS IMPORTS ======
import './layout/global.scss';

// =========== COMPONENT IMPORTS ===========
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Home from './containers/Home/Home';
import Portfolio from './containers/Portfolio/Portfolio';
import About from './containers/About/About';
import Navigation from './components/Navigation/Navigation';

// const supportsHistory = 'pushState' in window.history;


export class App extends Component {
  render() {
    console.log('rendered app');

    return (
      <Router >
        <div className="app-container">
          <Logo />
          <Background img={backgroundImg} />
          <Footer />
          <Navigation />

          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  timeout={1000}
                  classNames="page">
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/about" component={About} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />

          {/* <h1>If your feet got cemented, make concrete move!</h1> */}
        </div>
      </Router>
    );
  }
}


export default App;
