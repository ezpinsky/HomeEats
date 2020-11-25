import './index.css';
import { Route, Switch } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import Home from './components/Home';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/' component={SplashPage} />
				<Route path='/home' component={Home} />
			</Switch>
		</>
	);
}

export default App;
