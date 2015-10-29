import { GET_ARRAY_ITEM } from '../actions/crud-actions';

export default function (select = null, action) {
	switch(action.type) {
		case GET_ARRAY_ITEM:
			if (action.finished && !action.error) {
				return Object.assign({}, action.result);
			} else {
				return select;
			}
		default:
			return select;
	}
}