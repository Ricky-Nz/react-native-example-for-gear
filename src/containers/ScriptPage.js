import React, { Component, StyleSheet, PropTypes, View } from 'react-native';

class ScriptPage extends Component {
	render() {
		return (
			<View style={styles.content}>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		backgroundColor: 'red',
		flex: 1
	}
});

ScriptPage.propTypes = {
	script: PropTypes.object.isRequired
};

export default ScriptPage;