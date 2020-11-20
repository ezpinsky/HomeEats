import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from './actions/sessionActions';
import SignupFormPage from './components/SignUpForm';

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		isLoaded && (
			<Switch>
				<Route path='/login'>
					<LoginFormPage />
				</Route>
				<Route path='/signup'>
					<SignupFormPage />
				</Route>
			</Switch>
		)
	);
}

export default App;
