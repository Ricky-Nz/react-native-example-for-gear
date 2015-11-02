import React, { Component, StyleSheet, PropTypes, Modal, View, Text } from 'react-native';

class GnLoading extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
	}
	render() {
		return (
			<View>
				<Modal animated={true} transparent={true} visible={true}>
					<View style={styles.content}>
						<Text style={styles.indicator}>Loading...</Text>
					</View>
				</Modal>
			</View>
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
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	indicator: {
		color: 'white'
	}
});

export default GnLoading;