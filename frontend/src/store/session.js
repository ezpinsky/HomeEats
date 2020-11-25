import { REMOVE_USER, SET_USER } from '../actions/sessionActions';

const initialState = { user: null };

const sessionReducer = (state = initialState, { type, payload }) => {
	let newState;
	switch (type) {
		case SET_USER:
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
