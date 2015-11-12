'use strict';
import React from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import networking from './middlewares/networking';
import Application from './containers/app';

const createStoreWithMiddleware = applyMiddleware(
	thunk,
	networking,
	logger()
)(createStore);
const store = createStoreWithMiddleware(rootReducer);

class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Application/>
			</Provider>
		);
	}
}

export default Root;