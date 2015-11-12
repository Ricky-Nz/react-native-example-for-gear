import React, { Component, StyleSheet, PropTypes, Modal, View, Text } from 'react-native';

class GnLoading extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
	}
	render() {
		return (
			<Modal animated={true} transparent={true} visible={this.props.visible}>
				<View style={styles.content}>
					<Text style={styles.indicator}>Loading...</Text>
				</View>
			</Modal>
		);
	}
	show() {
		this.setState({show: true});
	}
	dismiss() {
		this.setState({show: false});
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center'
	},
	indicator: {
		color: 'white'
	}
});

export default GnLoading;