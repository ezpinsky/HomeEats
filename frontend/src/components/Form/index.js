import { useState, cloneElement } from 'react';
import { v4 } from 'uuid';

export default function Form({ children }) {
	const [formFields, setFormFields] = useState({});

	return (
		<form style={{ backgroundColor: 'green' }}>
			{children.map(child => cloneElement(child, { formFields, setFormFields, key: v4() }))}
		</form>
	);
}
