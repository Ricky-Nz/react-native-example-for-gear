import _ from 'underscore';
import { DELETE_REPORT, LOAD_REPORTS } from '../actions/crud-actions';
import { arrayUnshift, arrayUpdate, arrayDelete, arrayLoad } from './utils';

export default function (array = [], action) {
	if (!action.finished || action.error) {
		return array;
	}

	switch(action.type) {
		case DELETE_REPORT:
			return arrayDelete(array, action);
		case LOAD_REPORTS:
			return arrayLoad(array, action);
		default:
			return array;
	}
}