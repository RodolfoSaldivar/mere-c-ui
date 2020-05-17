import * as types from '../types/loggedUserTypes';

export const setLanguage = (string = '') => ({
	type: types.SET_LANGUAGE,
	payload: string
});
