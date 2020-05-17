import * as types from '../types/usersTypes';

export const setName = (string = '') => ({
	type: types.SET_NAME,
	payload: string
});
export const setMail = (string = '') => ({
	type: types.SET_MAIL,
	payload: string
});
export const setLastname = (string = '') => ({
	type: types.SET_LASTNAME,
	payload: string
});
export const setPassword = (string = '') => ({
	type: types.SET_PASSWORD,
	payload: string
});
export const setGroups = (arrayOfStrings = []) => ({
	type: types.SET_GROUPS,
	payload: arrayOfStrings
});
