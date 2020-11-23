import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SplashPage.css';
import { LoginForm } from '../LoginFormPage';
import { SignUpForm } from '../SignUpForm';

export default function SplashPage() {
	const sessionUser = useSelector(state => state.session.user);

	const [loginForm, setLoginForm] = useState(true);

	const handleClick = e => {
		e.preventDefault();
		setLoginForm(!loginForm);
	};

	if (sessionUser) return <Redirect to='/home' />;
	let formFields;
	let splashMessage;

	if (loginForm) {
		formFields = <LoginForm />;
		splashMessage = "Don't have an account? Sign up here!";
	} else {
		formFields = <SignUpForm />;
		splashMessage = 'Already have an account? Sign in here!';
	}
	return (
		<div className='splash-container'>
			<img
				className='splash-image'
				src={
					'https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
				}
				alt='plate-of-food-on-wood'
			/>
			<div className='form-container'>
				<div className='logo-container'>
					<h1>HomeEats</h1>
					<h2>where food lives</h2>
				</div>
				{formFields}
				<hr className='splash-line'></hr>
				<button onClick={handleClick}>{splashMessage}</button>
			</div>
		</div>
	);
}
