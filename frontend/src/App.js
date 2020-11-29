import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import Home from './components/Home';
import HomeChef from './components/HomeChef';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/home-chef/:id' component={HomeChef} />
				<Route exact path='/' component={Home} />
				<Route path='/:form' component={SplashPage} /> {/*must be last route*/}
				<Route path='*' component={SplashPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
