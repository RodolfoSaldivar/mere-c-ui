import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import loggedUserReducer from './loggedUserReducer';

export default combineReducers({
	usersReducer,
	loggedUserReducer
});
