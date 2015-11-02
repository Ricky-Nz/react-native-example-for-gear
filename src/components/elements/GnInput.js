import React, { Component, TextInput, StyleSheet, View } from 'react-native';
import GnIcon from './GnIcon';

class GnInput extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { icon, iconSize, iconColor, style, ...inputProps } = this.props;

		return (
			<View style={[style, styles.content]}>
				<GnIcon icon={icon} size={iconSize} color={iconColor}/>
				<TextInput {...inputProps} underlineColorAndroid='transparent'
					style={styles.input} value={this.state.text}
					onChangeText={this.onChangeText.bind(this)}/>
			</View>
		);
	}
	onChangeText(text) {
		this.setState({text: text});
	}
	getValue() {
		return this.state.text;
	}
}

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10
	},
	input: {
		flex: 1,
		marginLeft: 5
	}
});

export default GnInput;

