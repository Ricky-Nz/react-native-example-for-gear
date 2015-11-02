import {
	CREATE_PARAMETER, UPDATE_PARAMETER, DELETE_PARAMETER, LOAD_PARAMETERS,
	CREATE_PACKAGE, DELETE_PACKAGE, LOAD_PACKAGES,
	GET_REPORT, DELETE_REPORT, LOAD_REPORTS,
	GET_SCRIPT, CREATE_SCRIPT, UPDATE_SCRIPT, DELETE_SCRIPT, LOAD_SCRIPTS
} from '../actions/crud-actions';
import { LOGIN, REGISTER } from '../actions/user-actions';

export default function (state = {}, action) {
	switch(action.type) {
		case CREATE_PARAMETER:
		case UPDATE_PARAMETER:
		case DELETE_PARAMETER:
		case LOAD_PARAMETERS:
		case CREATE_PACKAGE:
		case DELETE_PACKAGE:
		case LOAD_PACKAGES:
		case GET_REPORT:
		case DELETE_REPORT:
		case LOAD_REPORTS:
		case GET_SCRIPT:
		case CREATE_SCRIPT:
		case UPDATE_SCRIPT:
		case DELETE_SCRIPT:
		case LOAD_SCRIPTS:
		case LOGIN:
		case REGISTER:
			return {type: action.type, finished: action.finished, error: action.error});
		default:
			return state;
	}
}