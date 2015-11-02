import {
	CREATE_PARAMETER, UPDATE_PARAMETER, DELETE_PARAMETER, LOAD_PARAMETERS,
	CREATE_PACKAGE, DELETE_PACKAGE, LOAD_PACKAGES,
	GET_REPORT, DELETE_REPORT, LOAD_REPORTS,
	GET_SCRIPT, CREATE_SCRIPT, UPDATE_SCRIPT, DELETE_SCRIPT, LOAD_SCRIPTS
} from '../actions/crud-actions';
import { LOGIN, REGISTER, CLEAR_ERROR } from '../actions/user-actions';

export default function (status = {}, action) {
	switch(action.type) {
		case CLEAR_ERROR:
			return Object.assign({}, status, {error: null});
		case CREATE_PARAMETER:
		case UPDATE_PARAMETER:
		case DELETE_PARAMETER:
		case CREATE_PACKAGE:
		case DELETE_PACKAGE:
		case DELETE_REPORT:
		case GET_REPORT:
		case GET_SCRIPT:
		case CREATE_SCRIPT:
		case UPDATE_SCRIPT:
		case DELETE_SCRIPT:
		case LOGIN:
		case REGISTER:
			return Object.assign({}, status, {submitting: !action.finished, error: action.error});
		case LOAD_PARAMETERS:
		case LOAD_PACKAGES:
		case LOAD_REPORTS:
		case LOAD_SCRIPTS:
			if (action.finished && !action.error) {
				return Object.assign({}, status, { querying: false,
					total: action.result.total, skip: action.result.skip + action.result.data.length, error: null });
			} else {
				return Object.assign({}, status, { querying: !action.finished, error: action.error ? action.error.message : null })
			}
		default:
			return status;
	}
}

