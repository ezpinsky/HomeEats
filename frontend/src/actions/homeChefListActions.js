import { fetch } from '../store/csrf';

export const HOME_CHEF_LIST = 'HOME_CHEF_LIST';
export const HOME_CHEF_LIST_LOADING = 'HOME_CHEF_LIST_LOADING';
export const HOME_CHEF_LIST_ERROR = 'HOME_CHEF_LIST_ERROR';

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
		const res = await fetch('/api/homeChefsList');
		dispatch(getHomeChefsListSuccess(res.data));
		return res.data;
	};
}

//home-chef-page

//menu

//add-item-to-basket/localstorage

//see-basket
