import React, { Component, StyleSheet, PropTypes, View, Text } from 'react-native';
import GnIcon from './GnIcon';
import GnClickable from './GnClickable';

class GnListItem extends Component {
	render() {
		const { icon, primary, secondary, ...itemProps } = this.props;

		return (
			<GnClickable {...itemProps}>
				<View style={styles.content}>
					{icon&&<GnIcon icon={icon}/>}
					<View style={styles.textContent}>
						<Text style={styles.primary}>{primary}</Text>
						<Text style={styles.secondary}>{secondary}</Text>
					</View>
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
	icon: PropTypes.string,
	primary: PropTypes.string.isRequired,
	secondary: PropTypes.string
};

export default GnListItem;