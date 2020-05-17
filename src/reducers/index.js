import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import commonReducer from './commonReducer';
import loggedUserReducer from './loggedUserReducer';

export default combineReducers({
	usersReducer,
	commonReducer,
	loggedUserReducer
});
