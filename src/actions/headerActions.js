import * as types from '../types/headerTypes';

export const setLanguage = (string = '') => ({
	type: types.SET_LANGUAGE,
	payload: string
});
