import './Navigation.css';
import '../../index.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

export default function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
				<NavLink to='/signup'>Sign up</NavLink>
				<NavLink to='/signin'>Sign in</NavLink>
			</>
		);
	}
	return (
		<nav className='rounded-corners'>
			<ul>
				<li>
					<NavLink exact to='/'>
						<div className='profile-button-container'>
							Home
							{isLoaded && sessionLinks}
						</div>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
