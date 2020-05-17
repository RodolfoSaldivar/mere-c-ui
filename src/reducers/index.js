import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import headerReducer from './headerReducer';

export default combineReducers({
	usersReducer,
	headerReducer
});
