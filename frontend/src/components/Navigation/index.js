import './Navigation.css';
import '../../index.css';
import logo from './home-eats-nav-logo.png';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

export default function Navigation({ isLoaded }) {
	return (
		<nav>
			<div className='nav-item'>
				<NavLink to='/home'>
					<div className='nav-logo'>
						<img className='home-eats-logo' src={logo} alt='logo'></img>HomeEats
					</div>
				</NavLink>
			</div>
			<div className='hamburger-container'>{<ProfileButton />}</div>
		</nav>
	);
}
