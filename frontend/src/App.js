import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from './actions/sessionActions';
import SignupForm from './components/SignUpForm';
import Navigation from './components/Navigation';

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<Switch>
					<Route path='/signin' component={LoginFormPage} />
					<Route path='/signup' component={SignupForm} />
				</Switch>
			)}
		</>
	);
}

export default App;
