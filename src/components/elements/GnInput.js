import React, { Component, TextInput, StyleSheet, View, Text } from 'react-native';
import GnIcon from './GnIcon';

class GnInput extends Component {
	render() {
		const { icon, iconSize, iconColor, style, ...inputProps } = this.props;

		return (
			<View style={[styles.content, this.props.style]}>
				<GnIcon icon={icon} size={iconSize} color={iconColor}/>
				<TextInput {...inputProps} style={[style, styles.input]}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		backgroundColor: 'white',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#E0E0E0',
		borderRadius: 4,
		padding: 6
	},
	input: {
		flex: 1,
		marginLeft: 5
	}
});

export default GnInput;