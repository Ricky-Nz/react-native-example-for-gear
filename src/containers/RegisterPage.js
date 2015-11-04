import React, { Component, PropTypes, StyleSheet, View, ToastAndroid, Text } from 'react-native';
import { GnIcon, GnInput, GnButton, GnLoading } from '../components/elements';
import { createSelector } from 'reselect';
import { connect } from 'react-redux/native';
import { register } from '../actions/user-actions';

class RegisterPage extends Component {
	componentWillReceiveProps(nextProps) {
		const newState = nextProps.actionState;
		const lastState = this.props.actionState;
		if (newState && lastState
				&& newState.finished && !lastState.finished) {
			if (newState.error) {
				ToastAndroid.show(newState.error, ToastAndroid.SHORT);
			} else {
				this.props.navigator.pop();
			}
		}
	}
	render() {
		return (
			<View style={styles.content}>
				<View style={styles.bannerContent}>
					<GnIcon icon='cogs' size='lg' color='white'/>
					<Text style={styles.banner}>Register</Text>
				</View>
				<View style={styles.mainContent}>
					<View style={styles.inputContent}>
						<GnInput ref='email' keyboardType='email-address' placeholder='email'
							icon='user' iconSize='sm' iconColor='gray'/>
						<GnInput ref='password' keyboardType='default' placeholder='password'
							icon='key' iconSize='sm' iconColor='gray' secureTextEntry={true}/>
						<GnInput ref='confirmPassword' keyboardType='default' placeholder='confirm password'
							icon='key' iconSize='sm' iconColor='gray' secureTextEntry={true}/>
					</View>
					<View style={styles.buttonbar}>
						<GnButton label='Register'
							onPress={this.onRegisterClicked.bind(this)}/>
					</View>
				</View>
				<GnLoading ref='dialog'/>
			</View>
		);
	}
	onRegisterClicked() {
		const email = this.refs.email.getValue();
		const password = this.refs.password.getValue();
		const confirmPassword = this.refs.confirmPassword.getValue();
		if (!email) {
			return ToastAndroid.show('email can\'t be empty', ToastAndroid.SHORT);
		} else if (!password || password != confirmPassword) {
			return ToastAndroid.show('password not consistent', ToastAndroid.SHORT);
		} else if (password.length < 4) {
			return ToastAndroid.show('password length can\'t less then 4 digit', ToastAndroid.SHORT);
		}

		this.props.dispatch(register(email, password));
	}
}

RegisterPage.propTypes = {
	navigator: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#00BCD4'
	},
	bannerContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 80,
		paddingBottom: 20
	},
	banner: {
		fontSize: 26,
		marginLeft: 5,
		color: 'white'
	},
	mainContent: {
		padding: 10
	},
	inputContent: {
		backgroundColor: 'white',
		borderRadius: 8
	},
	buttonbar: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	}
});

const actionReducer = createSelector(
	state => state.actionState,
	actionState => {
		if (actionState.type === 'REGISTER') {
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

export default connect(storeSelector)(RegisterPage);



