import './Navigation.css';
import '../../index.css';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

export default function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const home_chef = useSelector(state => state.session.chef);

	let sessionLinks;
	if (sessionUser) {
		//if user then add normal links
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		//if home chef then add home_chef link
		sessionLinks = <ProfileButton user={sessionUser} chef={home_chef} />;
	}

	return (
		<nav>
			<div className='nav-item'>
				<NavLink to='/home'>
					<div className='nav-logo'>HomeEats</div>
				</NavLink>
			</div>
			<div className='nav-item'>
				<div>
					<NavLink exact to='/'>
						<div className='hamburger-button'>{isLoaded && sessionLinks}</div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
}
