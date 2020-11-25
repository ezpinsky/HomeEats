import { fetch } from '../store/csrf';

export const SET_USER = 'session/setUser';
export const setUser = user => {
	return {
		type: SET_USER,
		payload: user,
	};
};

export const REMOVE_USER = 'session/removeUser';
export const removeUser = () => {
	return {
		type: REMOVE_USER,
	};
};

//thunks
export const signup = user => async dispatch => {
	const { first_name, last_name, zip, email, password } = user;
	const res = await fetch('/api/users', {
		method: 'POST',
		body: JSON.stringify({
			first_name,
			last_name,
			zip,
			email,
			password,
		}),
	});
	dispatch(setUser(res.data.user));
	return res;
};

export const login = user => async dispatch => {
	const { credential, password } = user;
	const res = await fetch('/api/session', {
		method: 'POST',
		body: JSON.stringify({
			credential,
			password,
		}),
	});
	dispatch(setUser(res.data.user));
	return res;
};

export const restoreUser = () => async dispatch => {
	const res = await fetch('/api/session');
	dispatch(setUser(res.data.user));
	return res;
};

export const signOutUser = () => async dispatch => {
	const res = await fetch('/api/session', {
		method: 'DELETE',
	});
	dispatch(removeUser());
	return res;
};
