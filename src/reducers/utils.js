import _ from 'underscore';

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