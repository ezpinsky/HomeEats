import { fetch } from './csrf';
import { REMOVE_USER, SET_USER } from '../actions/sessionActions';

export const setUser = user => {
	return {
		type: SET_USER,
		payload: user,
	};
};

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

const initialState = { user: null };

const sessionReducer = (state = initialState, { type, payload }) => {
	let newState;
	switch (type) {
		case SET_USER:
			console.log(state);
			newState = Object.assign({}, state);
			newState.user = payload;
			return newState;
		case REMOVE_USER:
			newState = Object.assign({}, state);
			newState.user = null;
			return newState;
		default:
			return state;
	}
};

export default sessionReducer;
