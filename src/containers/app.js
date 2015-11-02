'use strict';
import React, { Navigator, BackAndroid } from 'react-native';
import { createSelector } from 'reselect';
import { connect } from 'react-redux/native';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ScriptPage from './ScriptPage';
import RegisterPage from './RegisterPage';

class Application extends React.Component {
	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress', function() {
			const routes = this.refs.nav.getCurrentRoutes();
			if (routes.length > 1) {
				this.refs.nav.pop();
				return true;
			}
		}.bind(this));
	}
	render() {
		return (
			<Navigator ref='nav' initialRoute={{page: 'login'}}
				renderScene={this.renderRoute.bind(this)}/>
		);
	}
	renderRoute(route, navigator) {
		switch(route.page) {
			case 'login':
				return <LoginPage navigator={navigator}/>;
			case 'register':
				return <RegisterPage navigator={navigator}/>
			case 'home':
				return <HomePage navigator={navigator}/>;
			case 'script':
				return <ScriptPage navigator={navigator}/>;
		}
	}
}

export default Application;


