import _ from 'underscore';
import { CREATE_SCRIPT, UPDATE_SCRIPT, DELETE_SCRIPT, LOAD_SCRIPTS } from '../actions/crud-actions';
import { arrayUnshift, arrayUpdate, arrayDelete, arrayLoad } from './utils';

export default function (array = [], action) {
	if (!action.finished || action.error) {
		return array;
	}

	switch(action.type) {
		case CREATE_SCRIPT:
			return arrayUnshift(array, action);
		case UPDATE_SCRIPT:
			return arrayUpdate(array, action);
		case DELETE_SCRIPT:
			return arrayDelete(array, action);
		case LOAD_SCRIPTS:
			return arrayLoad(array, action);
		default:
			return array;
	}
}