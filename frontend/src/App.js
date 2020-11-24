import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './actions/sessionActions';
import SplashPage from './components/SplashPage';
import Home from './components/Home';

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);
	console.log(setIsLoaded);

	return (
		<>
			{/* <Navigation isLoaded={isLoaded} className={`hidden`} /> */}
			{isLoaded && (
				<Switch>
					<Route exact path='/' component={SplashPage} />
					<Route path='/home' component={Home} />
				</Switch>
			)}
		</>
	);
}

export default App;
