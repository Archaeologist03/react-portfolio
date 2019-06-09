// =========== REACT IMPORTS ===============
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// =========== STYLES ======================
import './layout/global.scss';
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

// =========== MEMO-ing COMPONENTS ==========
const MemoBackground = React.memo(Background);
const MemoLogo = React.memo(Logo);
const MemoNav = React.memo(Navigation);
const MemoFooter = React.memo(Footer);

const MemoHome = React.memo(Home);
const MemoPortfolio = React.memo(Portfolio);
const MemoAbout = React.memo(About);

function App() {
  return (
    <Router>
      <div className='app-container'>
        <MemoLogo />
        <MemoBackground img={backgroundImg} />
        <MemoFooter />
        <MemoNav />

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                timeout={1000}
                classNames='page'>
                <Switch location={location}>
                  <Route exact path='/' component={() => <MemoHome />} />
                  <Route
                    path='/portfolio'
                    component={() => <MemoPortfolio />}
                  />
                  <Route path='/about' component={() => <MemoAbout />} />
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

export default App;
