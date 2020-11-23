import './SignUpForm.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
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

	const sessionUser = useSelector(state => state.session.user);

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

	return (
		<div className='login-wrapper'>
			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label>
					First Name
					<input
						type='text'
						value={first_name}
						onChange={e => setFirstname(e.target.value)}
						required
					/>
				</label>
				<label>
					Last Name
					<input
						type='text'
						value={last_name}
						onChange={e => setLastname(e.target.value)}
						required
					/>
				</label>
				<label>
					Email
					<input type='text' value={email} onChange={e => setEmail(e.target.value)} required />
				</label>
				<label>
					Zip
					<input type='text' value={zip} onChange={e => setZip(e.target.value)} required />
				</label>
				<label>
					Password
					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</label>
				<label>
					Confirm Password
					<input
						type='password'
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
}

export default SignupFormPage;
