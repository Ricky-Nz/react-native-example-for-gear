import _ from 'underscore';
import { CREATE_PACKAGE, DELETE_PACKAGE, LOAD_PACKAGES } from '../actions/crud-actions';
import { arrayUnshift, arrayDelete, arrayLoad } from './utils';

export default function (array = [], action) {
	if (!action.finished || action.error) {
		return array;
	}

	switch(action.type) {
		case CREATE_PACKAGE:
			return arrayUnshift(array, action);
		case DELETE_PACKAGE:
			return arrayDelete(array, action);
		case LOAD_PACKAGES:
			return arrayLoad(array, action);
		default:
			return array;
	}
}