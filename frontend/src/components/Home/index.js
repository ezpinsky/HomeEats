import './Home.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './kitchen-banner.jpg';
import Navigation from '../Navigation';
import * as sessionActions from '../../actions/sessionActions';
import HomeChefsList from '../HomeChefsList';

export default function Home(prop) {
	const sessionUser = useSelector(state => state.session.user);
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

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
