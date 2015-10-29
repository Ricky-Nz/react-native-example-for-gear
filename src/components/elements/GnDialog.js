import React, { Component, StyleSheet, PropTypes, Modal, View, Text } from 'react-native';
import GnButton from './GnButton';

class GnDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {show: false};
	}
	render() {
		return (
			<Modal animated={true} transparent={true} visible={this.state.show}>
				<View style={styles.content}>
					<View style={styles.dialog}>
						<Text style={styles.dialogContent}>TEETSETSETf</Text>
						<View style={styles.bottombar}>
							<GnButton label='Cancel'/>
							<GnButton label='Submit'/>
						</View>
					</View>
				</View>
			</Modal>
		);
	}
	show() {
		this.setState({show: true});
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		padding: 20
	},
	dialog: {
		backgroundColor: '#fff',
		borderRadius: 10
	},
	dialogContent: {
		height: 200
	},
	bottombar: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	}
});

export default GnDialog;