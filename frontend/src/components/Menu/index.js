import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './Menu.css';

export default function Menu({ homeChefId }) {
	let menus = [{ title: 'lunch' }];
	return (
		<>
			{/* <div className='Menus-container'>
				<h1>Menus</h1>
				<div className='tabs'>
					<ul className='tab-header'>
						{menus.map(folder => (
							<li key={folder.title}>
								<NavLink to={`/tabs/${folder.title}`} draggable='false'>
									{folder.title}
								</NavLink>
							</li>
						))}
					</ul>
					<Switch>
						{menus.map(folder => (
							<Route
								key={folder.title}
								path={`/tabs/${folder.title}`}
								render={() => <div className='tab-content'>{folder.content}</div>}
							/>
						))}
						<Route path='*'>
							<div className='tab-content'>Select a folder tab</div>
						</Route>
					</Switch>
				</div>
			</div> */}
		</>
	);
}
