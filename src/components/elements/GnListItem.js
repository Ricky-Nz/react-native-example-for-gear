import React, { Component, StyleSheet, PropTypes, View, Text } from 'react-native';
import GnIcon from './GnIcon';
import GnClickable from './GnClickable';

class GnListItem extends Component {
	render() {
		const { leftView, primaryText, secondaryText, rightView, style, ...itemProps } = this.props;

		return (
			<GnClickable {...itemProps}>
				<View style={[styles.content, style]}>
					{leftView}
					<View style={styles.textContent}>
						<Text style={styles.primary}>{primaryText}</Text>
						<Text style={styles.secondary}>{secondaryText}</Text>
					</View>
					{rightView}
				</View>
			</GnClickable>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		height: 60
	},
	textContent: {
		flex: 1,
		paddingHorizontal: 10
	},
	primary: {
		fontSize: 16,
		color: 'black'
	},
	secondary: {
		fontSize: 12,
		color: 'gray'
	}
});

GnListItem.propTypes = {
	leftView: PropTypes.element,
	primaryText: PropTypes.string.isRequired,
	secondaryText: PropTypes.string,
	rightView: PropTypes.element
};

export default GnListItem;