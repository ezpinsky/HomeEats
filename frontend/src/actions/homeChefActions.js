import { fetch } from '../store/csrf';
// const fetch = require('fetch');

export const HOME_CHEF_LIST = 'HOME_CHEF_LIST';
export const HOME_CHEF_LIST_LOADING = 'HOME_CHEF_LIST_LOADING';
export const HOME_CHEF_LIST_ERROR = 'HOME_CHEF_LIST_ERROR';
export const HOME_CHEF_INFO = 'HOME_CHEF_INFO';
export const HOME_CHEF_CUISINES = 'HOME_CHEF_CUISINES';

export const getHomeChefsListLoading = () => {
	return {
		type: HOME_CHEF_LIST_LOADING,
	};
};

export const getHomeChefsListSuccess = homeChefs => {
	return {
		type: HOME_CHEF_LIST,
		homeChefs: homeChefs,
	};
};

export const getHomeChefsListError = error => {
	return {
		type: HOME_CHEF_LIST_ERROR,
		error: error,
	};
};

export function getHomeChefsList() {
	return async dispatch => {
		dispatch(getHomeChefsListLoading());
		const res = await fetch('/api/homeChefs');
		dispatch(getHomeChefsListSuccess(res.data));
		return res.data;
	};
}

export const getHomeChefInfoSuccess = homeChefInfo => {
	return {
		type: HOME_CHEF_INFO,
		homeChefInfo: homeChefInfo,
	};
};

export function getHomeChefInfo(homeChefId) {
	return async dispatch => {
		const res = await fetch('/api/homeChefs', {
			method: 'POST',
			body: JSON.stringify({ homeChefId }),
		});
		dispatch(getHomeChefInfoSuccess(res.data));
		return res.data;
	};
}

export const getHomeChefCuisinesSuccess = homeChefCuisines => {
	return {
		type: HOME_CHEF_CUISINES,
		homeChefCuisines: homeChefCuisines,
	};
};

export function getHomeChefCuisines(homeChefId) {
	return async dispatch => {
		const res = await fetch('/api/homeChefs/cuisines', {
			method: 'POST',
			body: JSON.stringify({ homeChefId }),
		});
		console.log(res.data);
		dispatch(getHomeChefCuisinesSuccess(res.data));
		return res.data;
	};
}

//menu

//add-item-to-basket/localstorage

//see-basket
