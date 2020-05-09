import * as types from '../types/headerTypes';

const INITIAL_STATE = {
	language: '' // MX, US, etc
};

export default (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case types.SET_LANGUAGE:
			return { ...state, language: action.payload };

		default:
			return state;
	}
};
