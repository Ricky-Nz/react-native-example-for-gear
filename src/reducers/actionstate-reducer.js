import {
	CREATE_ITEM, UPDATE_ITEM, DELETE_ITEM, GET_ITEM, LOAD_ITEMS
} from '../actions/crud-actions';
import { LOGIN, REGISTER } from '../actions/user-actions';

export default function (state = {}, action) {
	switch(action.type) {
		case CREATE_ITEM:
		case UPDATE_ITEM:
		case DELETE_ITEM:
		case GET_ITEM:
		case LOAD_ITEMS:
		case LOGIN:
		case REGISTER:
			return {type: action.type, finished: action.finished, error: action.error};
		default:
			return state;
	}
}