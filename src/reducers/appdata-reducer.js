import { LOGIN, LOGOUT } from '../actions/user-actions';
import { LOAD_ITEMS } from '../actions/crud-actions';

export default function (app = {}, action) {
	switch(action.type) {
		case LOGIN:
			if (action.finished && !action.error) {
	            return {
	            	accessToken: action.result.id,
	            	userId: action.result.userId,
	            	email: action.result.email
	            }
			} else {
				return app;
			}
		case LOGOUT:
			if (action.finished) {
				return {}
			} else {
				return app;
			}
		case LOAD_ITEMS:
			if (action.finished && !action.error) {
				return Object.assign({}, app, {total: action.result.total, skip: action.result.skip + action.result.data.length});
			} else {
				return app;
			}
		default: {
			return app;
		}
	}
}