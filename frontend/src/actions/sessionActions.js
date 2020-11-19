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
