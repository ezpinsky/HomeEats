import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { v4 } from 'uuid';
import Navigation from '../Navigation';
import * as homeChefActions from '../../actions/homeChefActions';
import './HomeChef.css';

export default function HomeChef() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	const { id } = useParams();
	const homeChefId = Number.parseInt(id);

	useEffect(() => {
		dispatch(homeChefActions.getHomeChefInfo(homeChefId));
		setIsLoaded(true);
	}, [dispatch, homeChefId]);

	const { homeChefsList } = useSelector(state => state.homeChefs);
	// const { homeChef } = useSelector(state => state.homeChef);

	let chef = homeChefsList.find(chef => chef.id === homeChefId);

	const [theChef, setChef] = useState(chef);

	return (
		<>
			<div className='spacer'>sdfg</div>
			<Navigation />
			<div key={v4()} className='chef-container'>
				<div className='image-container'>
					<img src={`${chef.image}`} alt='home chef' className='chef-image' />
				</div>
				<div className='chef-content-container'>
					<NavLink to={`/home-chef/${chef.id}`}>
						<h2 className='chef-name'>{chef.name}</h2>
					</NavLink>
					<div className='cuisines'>
						<span>Cuisines:</span>
					</div>
					<div className='description'>
						<p>{chef.description}</p>
					</div>
				</div>
			</div>
		</>
	);
}
