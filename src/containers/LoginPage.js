import React, { Component, PropTypes, StyleSheet, View, Text } from 'react-native';
import { GnIcon, GnInput, GnButton, GnLoading } from '../components/elements';
import { createSelector } from 'reselect';
import { connect } from 'react-redux/native';
import { login } from '../actions/user-actions';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 'ruiqi.sg@gmail.com',
			password: '123456'
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.submitting !== this.props.submitting) {
			nextProps.submitting ? this.refs.dialog.show() : this.refs.dialog.dismiss();
		}

		if (nextProps.accessToken && !this.props.accessToken) {
			this.props.onLoginSuccess();
		}
	}
	render() {
		return (
			<View style={styles.content}>
				<View style={styles.bannerContent}>
					<GnIcon icon='cogs' size='lg' color='white'/>
					<Text style={styles.banner}>Gear Test Automation</Text>
				</View>
				<View style={styles.inputContent}>
					<GnInput style={styles.inputRowItem} keyboardType='email-address' placeholder='email' value={this.state.email}
						icon='user' iconSize='sm' iconColor='gray' onChangeText={this.onEmailChange.bind(this)}/>
					<GnInput style={styles.inputRowItem} keyboardType='default' placeholder='password'
						icon='key' iconSize='sm' iconColor='gray' secureTextEntry={true} value={this.state.password}
						onChangeText={this.onPasswordChange.bind(this)}/>
					<View style={styles.buttonbar}>
						<GnButton style={styles.button} label='Register'/>
						<GnButton style={styles.button} label='Login'
							onPress={this.onLoginClicked.bind(this)}/>
					</View>
				</View>
				<GnLoading ref='dialog'/>
			</View>
		);
	}
	onEmailChange(text) {
		this.setState({email: text});
	}
	onPasswordChange(text) {
		this.setState({password: text});
	}
	onLoginClicked() {
		this.props.dispatch(login(this.state.email, this.state.password));
	}
}

LoginPage.propTypes = {
	onLoginSuccess: PropTypes.func.isRequired
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
	inputContent: {
		flex: 2,
		padding: 10
	},
	inputRowItem: {
		marginBottom: 5
	},
	buttonbar: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	button: {
		marginLeft: 10
	}
});

const storeSelector = createSelector(
	state => state.user.accessToken,
	state => state.status.submitting,
	(accessToken, submitting) => ({accessToken, submitting})
);

export default connect(storeSelector)(LoginPage);



