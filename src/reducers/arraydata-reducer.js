import _ from 'underscore';
import { CREATE_ITEM, UPDATE_ITEM, DELETE_ITEM, LOAD_ITEMS } from '../actions/crud-actions';

export default function (array = [], action) {
	if (!action.finished || action.error) {
		return array;
	}

	switch(action.type) {
		case CREATE_ITEM:
			return arrayUnshift(array, action);
		case UPDATE_ITEM:
			return arrayUpdate(array, action);
		case DELETE_ITEM:
			return arrayDelete(array, action);
		case LOAD_ITEMS:
			return arrayLoad(array, action);
		default:
			return array;
	}
}

export function arrayUnshift (datas, action) {
	if (!action.finished || action.error) {
		return datas;
	}
	return [action.result, ...datas];
}

export function arrayUpdate (datas, action) {
	if (!action.finished || action.error) {
		return datas;
	}
	const index = _.findIndex(datas, data => data.id === action.result.id);
	return [...datas.slice(0, index), action.result, ...datas.slice(index + 1)];
}

export function arrayDelete (datas, action) {
	if (!action.finished || action.error) {
		return datas;
	}
	const index = _.findIndex(datas, data => data.id === action.args);
	return [...datas.slice(0, index), ...datas.slice(index + 1)];
}

export function arrayLoad (datas, action) {
	if (action.result.skip == 0) {
		return [...action.result.data];
	} else {
		return [...datas, ...action.result.data];
	}
}