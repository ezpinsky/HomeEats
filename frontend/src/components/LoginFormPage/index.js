import React, { useState } from 'react';
import * as sessionActions from '../../actions/sessionActions';
import { useDispatch } from 'react-redux';

function LoginForm() {
	const dispatch = useDispatch();
	const [credential, setCredential] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).catch(res => {
			if (res.data && res.data.errors) setErrors(res.data.errors);
		});
	};

	const handleDemoSubmit = e => {
		e.preventDefault();
		return dispatch(
			sessionActions.login({ credential: 'demo@user.io', password: 'password' })
		).catch(res => {
			if (res.data && res.data.errors) setErrors(res.data.errors);
		});
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
		<>
			<div className='form-fields-container'>
				<form className='login-form-container' onSubmit={handleSubmit}>
					{errorList}
					<div className='form-field'>
						<input
							type='text'
							value={credential}
							onChange={e => setCredential(e.target.value)}
							placeholder='email'
							required
						/>
					</div>
					<div className='form-field'>
						<input
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							placeholder='password'
							required
						/>
					</div>
					<div className='login-demo-buttons-container'>
						<div>
							<button className='auth-button' type='submit'>
								Log In
							</button>
						</div>
						<div>
							<button className='auth-button' type='submit' onClick={handleDemoSubmit}>
								Demo
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default LoginForm;
