import './HomeChefList.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 } from 'uuid';
import * as homeChefsListActions from '../../actions/homeChefListActions';

export default function HomeChefList() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		dispatch(homeChefsListActions.getHomeChefsList());
		setIsLoaded(true);
	}, [dispatch]);

	const { homeChefsList } = useSelector(state => state.homeChefs);

	let chefsList = homeChefsList.map(chef => (
		<div key={v4()} className='chef-container'>
			<div className='image-container'>
				<img src={`${chef.image}`} alt='home chef' className='chef-image' />
			</div>
			<NavLink to={`/home-chef/${chef.id}`}>
				<div className='chef-list-item'>{chef.name}</div>
			</NavLink>
		</div>
	));
	console.log(chefsList);

	if (!isLoaded) return <p>Loading...</p>;
	return (
		<>
			<div className='list-container'>
				<div className='chef-list-container'>
					<h2>Find a Home Chef</h2>
					<div className='chef-list-items-container'>{chefsList}</div>
				</div>
			</div>
		</>
	);
}
