import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';

export default function ProfileButton() {
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);
	const user = useSelector(state => state.session.user);

	// make useSeletor for chefinfo
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
			<div className='hamburger-container'>
				<button className='hamburger-button' onClick={openMenu}>
					<div className='bar'></div>
					<div className='bar'></div>
					<div className='bar'></div>
				</button>
			</div>
			{showMenu && (
				<div className='hamburger-dropdown'>
					<div className='dropdown-item'>
						<div>{`Hello, ${user.first_name}`}</div>
					</div>
					<div className='dropdown-item'>
						<NavLink to={`/user/${user.id}/basket}`}>My Basket</NavLink>
					</div>
					{user.HomeChefId && (
						<div className='dropdown-item'>
							<NavLink to={`/home-chef/${user.HomeChefId}`}>My Home Chef</NavLink>
						</div>
					)}
					{/* my orders for stretch gaol */}
					<div className='dropdown-item'>
						<button onClick={signOut}>Sign Out</button>
					</div>
				</div>
			)}
		</>
	);
}
