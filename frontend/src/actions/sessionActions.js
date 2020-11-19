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

export const login = user => async dispatch => {
	const { credential, password } = user;
	const response = await fetch('/api/session', {
		method: 'POST',
		body: JSON.stringify({
			credential,
			password,
		}),
	});
	dispatch(setUser(response.data.user));
	return response;
};
