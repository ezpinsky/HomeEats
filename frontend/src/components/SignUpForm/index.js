import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';

function SignupFormPage() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [first_name, setFirstname] = useState('');
	const [last_name, setLastname] = useState('');
	const [zip, setZip] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);
			return dispatch(sessionActions.signup({ email, first_name, last_name, zip, password })).catch(
				res => {
					if (res.data && res.data.errors) setErrors(res.data.errors);
				}
			);
		}
		return setErrors(['Confirm Password field must be the same as the Password field']);
	};

	let errorList;
	if (errors.length > 0) {
		errorList = (
			<div className='login-error'>
				{errors.map((error, idx) => (
					<div key={idx} className='error-message'>
						{error}
					</div>
				))}
			</div>
		);
	}

	return (
		<div className='form-fields-container'>
			<form className='login-form-container' onSubmit={handleSubmit}>
				{errorList}
				<input
					type='text'
					value={first_name}
					onChange={e => setFirstname(e.target.value)}
					placeholder='first name'
					required
				/>
				<input
					type='text'
					value={last_name}
					onChange={e => setLastname(e.target.value)}
					placeholder='last name'
					required
				/>
				<input
					type='text'
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='email'
					required
				/>
				<input
					type='text'
					value={zip}
					onChange={e => setZip(e.target.value)}
					placeholder='zip'
					required
				/>
				<input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='password'
					required
				/>
				<input
					type='password'
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
					placeholder='confirm password'
					required
				/>
				<div className='signup-demo-buttons-container'>
					<div>
						<button className='auth-button' type='submit'>
							Sign Up
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SignupFormPage;
