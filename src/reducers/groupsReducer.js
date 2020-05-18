import * as types from '../types/groupsTypes';

const INITIAL_STATE = {
	name: ''
};

export default (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case types.SET_NAME:
			return { ...state, name: action.payload };

		default:
			return state;
	}
};
