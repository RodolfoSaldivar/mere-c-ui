import * as types from '../types/commonTypes';

export const setHideFirstModal = (bool = false) => ({
	type: types.SET_HIDE_FIRST_MODAL,
	payload: bool
});
export const setFirstOpenedModal = (string = '') => ({
	type: types.SET_FIRST_OPENED_MODAL,
	payload: string
});
