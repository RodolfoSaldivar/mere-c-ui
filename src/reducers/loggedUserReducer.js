import * as types from '../types/loggedUserTypes';

const INITIAL_STATE = {
	name: '',
	mail: '',
	groups: [],
	lastname: '',
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
