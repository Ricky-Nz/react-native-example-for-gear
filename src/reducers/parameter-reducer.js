import _ from 'underscore';
import { CREATE_PARAMETER, UPDATE_PARAMETER, DELETE_PARAMETER, LOAD_PARAMETERS } from '../actions/crud-actions';
import { arrayUnshift, arrayUpdate, arrayDelete, arrayLoad } from './utils';

export default function (array = [], action) {
	if (!action.finished || action.error) {
		return array;
	}

	switch(action.type) {
		case CREATE_PARAMETER:
			return arrayUnshift(array, action);
		case UPDATE_PARAMETER:
			return arrayUpdate(array, action);
		case DELETE_PARAMETER:
			return arrayDelete(array, action);
		case LOAD_PARAMETERS:
			return arrayLoad(array, action);
		default:
			return array;
	}
}