import React from 'react';
import { userSelector } from 'react-redux';
export default function HomeChefList() {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='list-container'>
			<ul></ul>
		</div>
	);
}
