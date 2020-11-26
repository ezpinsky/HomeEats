import './SplashPage.css';
import './splash-image.jpg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, NavLink, useParams } from 'react-router-dom';
import LoginForm from '../LoginFormPage';
import SignUpForm from '../SignUpForm';

export default function SplashPage() {
	const sessionUser = useSelector(state => state.session.user);

	const [loginForm, setLoginForm] = useState(true);
	let { form } = useParams();

	if (sessionUser) return <Redirect to='/' />;

	let formFields;
	let accountMessage;
	if (loginForm) {
		formFields = <LoginForm />;
		accountMessage = "Don't have an account? Sign up here!";
		form = 'signup';
	} else {
		formFields = <SignUpForm />;
		accountMessage = 'Already have an account? Sign in here!';
		form = 'login';
	}

	const handleClick = e => {
		e.preventDefault();
		setLoginForm(!loginForm);
		console.log(form);
		return <Redirect to={`/${form}`} />;
	};

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
					<button onClick={handleClick} className='account-message'>
						<NavLink to={`/${form}`}>{accountMessage}</NavLink>
					</button>
				</div>
			</div>
		</div>
	);
}
