import * as types from '../types/schedulesTypes';

const INITIAL_STATE = {
	cicle: 'D', // D = day, W = week, M = month
	points: '1',
	groupId: '',
	weekDays: [], // numbers
	monthDays: [], // numbers
	default: false,
	description: ''
};

export default (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case types.SET_CICLE:
			return { ...state, cicle: action.payload };

		case types.SET_POINTS:
			return { ...state, points: action.payload };

		case types.SET_WEEK_DAYS:
			return { ...state, weekDays: action.payload };

		case types.SET_MONTH_DAYS:
			return { ...state, monthDays: action.payload };

		case types.SET_DESCRIPTION:
			return { ...state, description: action.payload };

		default:
			return state;
	}
};
