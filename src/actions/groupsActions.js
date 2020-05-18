import * as types from '../types/groupsTypes';

export const setName = (string = '') => ({
	type: types.SET_NAME,
	payload: string
});
