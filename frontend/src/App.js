import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import Home from './components/Home';
import HomeChef from './components/HomeChef';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/home' component={Home} />
				<Route path='/home-chef/:id' component={HomeChef} />
				<Route exact path='/' component={SplashPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
