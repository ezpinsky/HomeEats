import {
	HOME_CHEF_LIST,
	HOME_CHEF_LIST_ERROR,
	HOME_CHEF_LIST_LOADING,
} from '../actions/homeChefListActions';

const initialState = { homeChefs: [] };

export function homeChefsListReducer(state = initialState, { type, homeChefs, error }) {
	let newState;
	switch (type) {
		case HOME_CHEF_LIST_LOADING:
			newState = Object.assign({}, state);
			newState.pending = true;
			return newState;
		case HOME_CHEF_LIST:
			newState = Object.assign({}, state);
			newState.pending = false;
			newState.homeChefs = homeChefs;
			return newState;
		case HOME_CHEF_LIST_ERROR:
			newState = Object.assign({}, state);
			newState.pending = false;
			newState.error = error;
			return newState;
		default:
			return state;
	}
}

export const getHomeChefsList = state => state.homeChefs;
export const getHomeChefsListPending = state => state.pending;
export const getHomeChefsListError = state => state.error;
