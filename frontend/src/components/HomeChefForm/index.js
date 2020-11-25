import React from 'react';
import Form from '../Form';
import Input from '../Input';

export default function HomeChefForm() {
	return (
		<Form>
			<Input name='i1' placeholder='Chef Name' />
			<Input name='i2' />
			<Input name='i3' />
			<Input name='i4' />
		</Form>
	);
}
