import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from './actions/sessionActions';
import SignupForm from './components/SignUpForm';
import Navigation from './components/Navigation';
import SplashPage from './components/SplashPage';

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
					<Route path='/' component={SplashPage}></Route>
					{/* <Route path='/signin' component={LoginFormPage} />
					<Route path='/signup' component={SignupForm} /> */}
				</Switch>
			)}
		</>
	);
}

export default App;
