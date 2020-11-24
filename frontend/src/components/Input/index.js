import React from 'react';

export default function Input({ name, setFormFields, formFields, placeholder }) {
	const handleChange = e => {
		setFormFields(state => {
			return {
				...state,
				[e.target.name]: e.target.value,
			};
		});
	};

	return (
		<input
			onChange={handleChange}
			name={name}
			value={formFields[name] || ''}
			placeholder={placeholder}
		/>
	);
}
