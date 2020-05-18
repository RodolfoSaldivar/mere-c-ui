import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import groupsReducer from './groupsReducer';
import commonReducer from './commonReducer';
import loggedUserReducer from './loggedUserReducer';

export default combineReducers({
	usersReducer,
	groupsReducer,
	commonReducer,
	loggedUserReducer
});
