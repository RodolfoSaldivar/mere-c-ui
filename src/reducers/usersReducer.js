import * as types from '../types/usersTypes';

const INITIAL_STATE = {
	// Used to save users
	name: '',
	mail: '',
	groups: [],
	lastname: '',
	password: ''
};

export default (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case types.SET_NAME:
			return { ...state, name: action.payload };

		case types.SET_MAIL:
			return { ...state, mail: action.payload };

		case types.SET_GROUPS:
			return { ...state, groups: action.payload };

		case types.SET_LASTNAME:
			return { ...state, lastname: action.payload };

		case types.SET_PASSWORD:
			return { ...state, password: action.payload };

		default:
			return state;
	}
};
