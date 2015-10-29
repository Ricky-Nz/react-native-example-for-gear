'use strict';
import React, { Navigator } from 'react-native';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ScriptPage from './ScriptPage';

class Application extends React.Component {
	render() {
		const router = (route, navigator) => {
			switch(route.page) {
				case 'login':
					return <LoginPage onLoginSuccess={this.onLoginSuccess.bind(this, navigator)}/>;
				case 'home':
					return <HomePage onScriptSelected={script => this.onScriptSelected(script, navigator)}/>;
				case 'script':
					return <ScriptPage script={route.data}/>;
			}
		};

		return (
			<Navigator initialRoute={{page: 'login'}}
				renderScene={router}/>
		);
	}
	onLoginSuccess(navigator) {
		navigator.push({page: 'home'});
	}
	onScriptSelected(script, navigator) {
		navigator.push({page: 'script', data: script});
	}
}

export default Application;