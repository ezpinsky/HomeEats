import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../Form';
import Input from '../Input';
import { Redirect } from 'react-router-dom';

export default function Home(prop) {
	const sessionUser = useSelector(state => state.session.user);
	if (!sessionUser) return <Redirect to='/' />;

	return (
		<Form>
			<Input name='i1' placeholder='Chef Name' />
			<Input name='i2' />
			<Input name='i3' />
			<Input name='i4' />
		</Form>
	);
}
