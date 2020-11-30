import {
	HOME_CHEF_LIST,
	HOME_CHEF_LIST_ERROR,
	HOME_CHEF_LIST_LOADING,
	HOME_CHEF_INFO,
} from '../actions/homeChefActions';

const initialState = { homeChefsList: [], homeChef: {} };

export function homeChefsReducer(state = initialState, { type, homeChefs, error, homeChefInfo }) {
	let newState;
	switch (type) {
		case HOME_CHEF_LIST_LOADING:
			newState = Object.assign({}, state);
			newState.pending = true;
			return newState;
		case HOME_CHEF_LIST:
			newState = Object.assign({}, state);
			newState.pending = false;
			newState.homeChefsList = homeChefs;
			return newState;
		case HOME_CHEF_LIST_ERROR:
			newState = Object.assign({}, state);
			newState.pending = false;
			newState.error = error;
			return newState;
		case HOME_CHEF_INFO:
			newState = Object.assign({}, state);
			newState.homeChef = homeChefInfo;
			return newState;
		default:
			return state;
	}
}
