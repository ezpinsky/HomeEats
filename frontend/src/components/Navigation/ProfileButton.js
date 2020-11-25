import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';

export default function ProfileButton({ user, home_chef }) {
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);

	const openMenu = () => {
		if (showMenu) return;
		setShowMenu(true);
	};

	useEffect(() => {
		if (!showMenu) return;

		const closeMenu = () => {
			setShowMenu(false);
		};

		document.addEventListener('click', closeMenu);

		return () => document.removeEventListener('click', closeMenu);
	}, [showMenu]);

	const signOut = e => {
		e.preventDefault();
		dispatch(sessionActions.signOutUser());
	};

	return (
		<>
			<div>
				<button onClick={openMenu}>Hamburger bars</button>
			</div>
			{showMenu && (
				<div className='hamburger-dropdown'>
					<div>{`${user.first_name}`}</div>
					(home_chef.name && <div>{<NavLink> {home_chef.name}</NavLink>}</div>)
					<div>{user.email}</div>
					<div>
						<button onClick={signOut}>Log Out</button>
					</div>
				</div>
			)}
		</>
	);
}
