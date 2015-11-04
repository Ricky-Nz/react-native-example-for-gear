import { CALL_API } from '../middlewares/networking';

export const CREATE_ITEM = 'CREATE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const GET_ITEM = 'GET_ITEM';
export const LOAD_ITEMS = 'LOAD_ITEMS';

export function createItem(modelName, data) {
	return {
		[CALL_API]: {
			method: 'POST',
			url: `/testers/:userId/${modelName}s`,
			body: data,
			token: true,
			action: CREATE_ITEM
		}
	};
}

export function getItem(modelName, id) {
	return {
		[CALL_API]: {
			method: 'GET',
			url: `/testers/:userId/${modelName}s/${id}`,
			token: true,
			action: GET_ITEM
		}
	};
}

export function updateItem(modelName, id, data) {
	return {
		[CALL_API]: {
			method: 'PUT',
			url: `/testers/:userId/${modelName}s/${id}`,
			body: data,
			token: true,
			action: UPDATE_ITEM
		}
	};
}

export function deleteItem(modelName, id) {
	return {
		[CALL_API]: {
			method: 'DELETE',
			url: `/testers/:userId/${modelName}s/${id}`,
			token: true,
			action: DELETE_ITEM,
			args: id
		}
	};
}

export function queryItems(modelName, selection) {
	return {
		[CALL_API]: {
			method: 'GET',
			url: `/testers/:userId/${modelName}s`,
			token: true,
			query: { filter: JSON.stringify(Object.assign({limit: 10, order: 'date DESC'}, selection)) },
			action: LOAD_ITEMS,
			args: selection ? selection.skip : null
		}
	};
}


