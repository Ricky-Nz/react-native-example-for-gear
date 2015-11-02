import { combineReducers } from 'redux';
import actionState from './actionstate-reducer';
import user from './user-reducer';
import scripts from './script-reducer';
import parameters from './parameter-reducer';
import packages from './package-reducer';
import reports from './report-reducer';
import select from './select-reducer';
import status from './status-reducer';

const rootReducer = combineReducers({
	actionState,
	user,
	scripts,
	parameters,
	packages,
	reports,
	select,
	status
});

export default rootReducer;