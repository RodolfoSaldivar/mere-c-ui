import * as types from '../types/schedulesTypes';

export const setCicle = (string = '') => ({
	type: types.SET_CICLE,
	payload: string
});
export const setPoints = (string = '') => ({
	type: types.SET_POINTS,
	payload: string
});
export const setWeekDays = (array = []) => ({
	type: types.SET_WEEK_DAYS,
	payload: array.sort((a, b) => a - b)
});
export const setMonthDays = (array = []) => ({
	type: types.SET_MONTH_DAYS,
	payload: array.sort((a, b) => a - b)
});
export const setDescription = (string = '') => ({
	type: types.SET_DESCRIPTION,
	payload: string
});
