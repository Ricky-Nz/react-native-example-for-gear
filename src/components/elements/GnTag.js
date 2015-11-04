import React, { Component, PropTypes, StyleSheet, Text, View } from 'react-native';

class GnTag extends Component {
	render() {
		const {label, color, style, ...props} = this.props;

		return (
			<View {...props} style={[styles.defaultStyle, {backgroundColor: color}, style]}>
				<Text>{label}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	defaultStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		paddingHorizontal: 12,
		paddingVertical: 3
	}
});

GnTag.propTypes = {
	label: PropTypes.string.isRequired,
	color: PropTypes.string
};

GnTag.defaultProps = {
	color: '#8BC34A'
};

export default GnTag;