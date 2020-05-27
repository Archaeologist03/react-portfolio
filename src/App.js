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
import Navigation from './components/Navigation/Navigation';

// =========== PAGES ========================
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';

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
			</div>
		</Router>
	);
}

export default App;
