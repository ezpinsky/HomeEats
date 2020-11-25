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
		HomeChefs: homeChefs,
	};
};

export const getHomeChefsListError = error => {
	return {
		type: HOME_CHEF_LIST_ERROR,
		error: error,
	};
};

export function getHomeChefsList() {
	return dispatch => {
		return dispatch => {
			dispatch(getHomeChefsListLoading());
			fetch('/api/homeChefsList')
				.then(res => res.json())
				.then(res => {
					if (res.error) {
						throw res.error;
					}
					dispatch(getHomeChefsListSuccess)(res.homeChefsList);
					return res.homeChefsList;
				})
				.catch(error => {
					dispatch(getHomeChefsListError(error));
				});
		};
	};
}

//home-chef-page

//menu

//add-item-to-basket/localstorage

//see-basket
