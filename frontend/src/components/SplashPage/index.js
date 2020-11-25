import './SplashPage.css';
import './splash-image.jpg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../LoginFormPage';
import SignUpForm from '../SignUpForm';

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
			<div className='form-outer-container'>
				<div className='form-container'>
					<div className='logo-container'>
						<h1>HomeEats</h1>
						<h2>where food lives</h2>
					</div>
					{formFields}
					<hr className='splash-line'></hr>
					<button onClick={handleClick} className='alt-auth-button'>
						{splashMessage}
					</button>
				</div>
			</div>
		</div>
	);
}
