import React, { useState } from 'react';
import * as sessionActions from '../../actions/sessionActions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
	const [credential, setCredential] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to='/' />;

	const handleSubmit = e => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).catch(res => {
			if (res.data && res.data.errors) setErrors(res.data.errors);
		});
	};

	return (
		<>
			<div className='login-wrapper'>
				<form className='login-form-container' onSubmit={handleSubmit}>
					<ul className='login-error'>
						{errors.map((error, idx) => (
							<li key={idx}>{error}</li>
						))}
					</ul>
					<div className='form-field'>
						<label>Username or Email</label>
						<input
							type='text'
							value={credential}
							onChange={e => setCredential(e.target.value)}
							required
						/>
					</div>
					<div className='form-field'>
						<label>Password</label>
						<input
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>
					</div>
					<button className='login-button' type='submit'>
						Log In
					</button>
				</form>
			</div>
		</>
	);
}

export default LoginFormPage;
