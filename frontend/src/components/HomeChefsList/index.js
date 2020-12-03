import './HomeChefList.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 } from 'uuid';
import * as homeChefsListActions from '../../actions/homeChefActions';

export default function HomeChefList() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		dispatch(homeChefsListActions.getHomeChefsList());
		setIsLoaded(true);
	}, [dispatch]);

	const { homeChefsList } = useSelector(state => state.homeChefs);

	const [inputVal, setInputVal] = useState('');

	const handleClick = e => {
		setInputVal(e.target.innerText);
	};

	const handleChange = e => {
		console.log(e.target.value);
		setInputVal(e.target.value);
	};

	const [matches, setMatches] = useState(homeChefsList);

	useEffect(() => {
		const matchedResults = homeChefsList.filter(chef =>
			chef.name.toLowerCase().startsWith(inputVal.toLowerCase())
		);
		setMatches(matchedResults);
	}, [inputVal, homeChefsList]);

	let chefList = matches.map(chef => (
		<div key={v4()} className='chef-container'>
			<div className='image-container'>
				<img src={`${chef.image}`} alt='home chef' className='chef-image' />
			</div>
			<div className='chef-content-container'>
				<NavLink to={`/home-chef/${chef.id}`}>
					<h2 className='chef-name'>{chef.name}</h2>
				</NavLink>
				<div className='city'>
					<span>Location: {chef.city}</span>
				</div>
				<div className='description'>
					<p>{chef.description}</p>
				</div>
			</div>
		</div>
	));

	if (!isLoaded) return <p>Loading...</p>; // add loading circle thingy <div> </div> here

	if (!matches.length) chefList = <h2>No Results Found</h2>;

	return (
		<>
			<div className='list-container'>
				<div className='chef-list-container'>
					<div className='search-container'>
						<div>
							<h1>Find a Home Chef</h1>
						</div>
						<div>
							<input
								className='auto-input'
								value={inputVal}
								placeholder='search'
								onChange={handleChange}
							/>
						</div>
					</div>
					{<div className='chef-list-items-container'>{chefList}</div>}
				</div>
			</div>
		</>
	);
}
