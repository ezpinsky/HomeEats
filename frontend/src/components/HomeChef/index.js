import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation';
import * as homeChefsListActions from '../../actions/homeChefListActions';

export default function HomeChef() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	const { id } = useParams();
	const homeChefId = Number.parseInt(id);
	const { homeChefsList } = useSelector(state => state.homeChefs);

	let chef = homeChefsList.find(chef => chef.id === homeChefId);

	useEffect(() => {
		dispatch(homeChefsListActions.getHomeChefsList());
		console.log('didrun');
		setIsLoaded(true);
	}, [dispatch]);

	return (
		<>
			<Navigation />
			<p>hey</p>
			<div className='address-container'>
				<h4>Address</h4>
				<p>{chef.street_address}</p>
			</div>
		</>
	);
}
