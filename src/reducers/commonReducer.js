import * as types from '../types/commonTypes';

const INITIAL_STATE = {
	firstOpenedModal: '', // user || group
	hideFirstModal: false
};

export default (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case types.SET_HIDE_FIRST_MODAL:
			return { ...state, hideFirstModal: action.payload };

		case types.SET_FIRST_OPENED_MODAL:
			return { ...state, firstOpenedModal: action.payload };

		default:
			return state;
	}
};
