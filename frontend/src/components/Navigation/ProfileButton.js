import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';

export default function ProfileButton({ user }) {
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
			{/* <div class='dropdown'>
				<button onClick={openMenu} className='dropbtn'>
					<div
						style={{
							'font-size': '20px',
							'color': 'turquoise',
						}}
					>
						<i className='fas fa-user-circle' />
						Home
					</div>
				</button>
				<div className='dropdown-content'>
					{showMenu && (
						<ul>
							<li>{user.username}</li>
							<li>{user.email}</li>
							<li>
								<button onClick={signOut}>Log Out</button>
							</li>
						</ul>
					)}
				</div>
			</div> */}

			<div>
				<button onClick={openMenu}>
					<div
						style={{
							'font-size': '20px',
							'color': 'turquoise',
						}}
					>
						<i className='fas fa-user-circle' />
					</div>
				</button>
			</div>
			{showMenu && (
				<ul className='profile-dropdown'>
					<li>{user.username}</li>
					<li>{user.email}</li>
					<li>
						<button onClick={signOut}>Log Out</button>
					</li>
				</ul>
			)}
		</>
	);
}
