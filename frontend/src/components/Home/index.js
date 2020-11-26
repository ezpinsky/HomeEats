import './Home.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './kitchen-banner.jpg';
import Navigation from '../Navigation';
import HomeChefsList from '../HomeChefsList';
import * as sessionActions from '../../actions/sessionActions';

export default function Home(prop) {
	const sessionUser = useSelector(state => state.session.user);
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	if (!isLoaded)
		return (
			<>
				<Navigation />
				<p>Loading...</p>
			</>
		);

	if (!sessionUser) return <Redirect to='/login' />;

	return (
		<div className='main-content'>
			<Navigation isLoaded={isLoaded} />
			<div className='banner-image'>
				<p id='welcome'>Welcome Home!</p>
			</div>
			<HomeChefsList />
		</div>
	);
}
