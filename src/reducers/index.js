import { combineReducers } from 'redux';
import actionState from './actionstate-reducer';
import array from './arraydata-reducer';
import app from './appdata-reducer';

const rootReducer = combineReducers({
	actionState,
	array,
	app
});

export default rootReducer;