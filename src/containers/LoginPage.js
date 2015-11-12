import React, { Component, PropTypes, StyleSheet, ToastAndroid, Modal, View, Text } from 'react-native';
import { GnIcon, GnInput, GnButton, GnProgressBar } from '../components/elements';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { login } from '../actions/user-actions';

class LoginPage extends Component {
	componentWillReceiveProps(nextProps) {
		const newState = nextProps.actionState;
		const lastState = this.props.actionState;
		if (newState && lastState
				&& newState.finished && !lastState.finished) {
			if (newState.error) {
				ToastAndroid.show(newState.error, ToastAndroid.SHORT);
			} else {
				this.props.navigator.push({page: 'home'});
			}
		}
	}
	render() {
		return (
			<View style={styles.content}>
				<View style={styles.bannerContent}>
					<GnIcon icon='cogs' gnSize='lg' color='white'/>
					<Text style={styles.banner}>Gear Test Automation</Text>
				</View>
				<View style={styles.mainContent}>
					<View style={styles.inputContent}>
						<GnInput ref='email' keyboardType='email-address'
							placeholder='email' icon='user' iconSize='sm' iconColor='gray'
							defaultValue='ruiqi.sg@gmail.com'/>
						<GnInput ref='password' keyboardType='default'
							placeholder='password' icon='key' iconSize='sm' iconColor='gray' secureTextEntry={true}
							defaultValue='123456'/>
					</View>
					<View style={styles.buttonbar}>
						<GnButton style={styles.leftButton} label='Register'
							onPress={this.onRegisterClicked.bind(this)}/>
						<GnButton style={styles.rightButton} label='Login'
							onPress={this.onLoginClicked.bind(this)}/>
					</View>
				</View>
			</View>
		);
	}
	onRegisterClicked() {
		this.props.navigator.push({page: 'register'});
	}
	onLoginClicked() {
		const email = this.refs.email.getValue();
		const password = this.refs.password.getValue();
		if (!email) {
			return ToastAndroid.show('email can\'t be empty', ToastAndroid.SHORT);
		} else if (!password) {
			return ToastAndroid.show('password can\'t be empty', ToastAndroid.SHORT);
		}

		this.props.dispatch(login(email, password));
	}
}

LoginPage.propTypes = {
	navigator: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#00BCD4'
	},
	bannerContent: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	banner: {
		fontSize: 26,
		marginLeft: 5,
		color: 'white'
	},
	mainContent: {
		flex: 2,
		padding: 16
	},
	inputContent: {
		backgroundColor: 'white',
		borderRadius: 8,
		paddingVertical: 8
	},
	buttonbar: {
		marginTop: 10,
		flexDirection: 'row'
	},
	leftButton: {
		flex: 1,
		marginRight: 5
	},
	rightButton: {
		flex: 1,
		marginLeft: 5
	}
});

const actionReducer = createSelector(
	state => state.actionState,
	actionState => {
		if (actionState.type === 'LOGIN') {
			return actionState;
		} else {
			return null;
		}
	}
);

const storeSelector = createSelector(
	actionReducer,
	actionState => ({actionState})
);

export default connect(storeSelector)(LoginPage);



