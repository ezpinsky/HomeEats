import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { v4 } from 'uuid';
import Navigation from '../Navigation';
import Menu from '../Menu';
import * as homeChefActions from '../../actions/homeChefActions';
import './HomeChef.css';

let cuisineList = [
	'Peruvian',
	'Pizzeria',
	'Chinese',
	'Asian',
	'Japanese',
	'Mexican',
	'Fast Food',
	'BBQ',
	'Mediterranean',
	'Bakery',
	'Steakhouse',
	'Indian',
	'Italian',
	'Thai',
	'French',
];

export default function HomeChef() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	const { id } = useParams();
	const homeChefId = Number.parseInt(id);

	useEffect(() => {
		dispatch(homeChefActions.getHomeChefInfo(homeChefId));
		setIsLoaded(true);
	}, [dispatch, homeChefId]);

	useEffect(() => {
		dispatch(homeChefActions.getHomeChefCuisines(homeChefId));
		setIsLoaded(true);
	}, [dispatch, homeChefId]);

	let cuisines;
	const homeChef = useSelector(state => state.homeChefs.homeChef);
	const homeChefCuisines = useSelector(state => state.homeChefs.homeChefCuisines);

	try {
		let cuisineIds = homeChefCuisines.map(cuisine => cuisineList[cuisine.cuisine_id]);
		cuisines = cuisineIds.join(', ');
	} catch (e) {
		console.error(e);
	}

	return (
		<>
			{/* <div className='spacer'></div> */}
			<Navigation />
			<div key={v4()} className='chef-container'>
				<div className='image-container'>
					<img src={`${homeChef.image}`} alt='home chef' className='chef-image' />
				</div>
				<div className='chef-content-container'>
					<NavLink to={`/home-chef/${homeChef.id}`}>
						<h2 className='chef-name'>{homeChef.name}</h2>
					</NavLink>
					<div>
						<span>Phone: {homeChef.phone}</span>
						<p>Address: {homeChef.street_address}</p>
					</div>
					<div className='cuisines'>
						<span>Cuisines: {cuisines}</span>
					</div>
					<div className='description'>
						<p>{homeChef.description}</p>
					</div>
				</div>
			</div>
			<Menu homeChefId={homeChef.id} />
		</>
	);
}
