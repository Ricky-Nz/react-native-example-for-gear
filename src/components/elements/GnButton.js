import React, { Component, StyleSheet, PropTypes, Text } from 'react-native';
import GnClickable from './GnClickable';

class GnButton extends Component {
	render() {
		const { label, ...buttonProps } = this.props;

		return (
			<GnClickable {...buttonProps} style={[styles.content, this.props.style]}>
				<Text>{label}</Text>
			</GnClickable>
		);
	};
}

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: 'white',
		borderRadius: 4
	}
});

GnButton.propTypes = {
	label: PropTypes.string
};

export default GnButton;