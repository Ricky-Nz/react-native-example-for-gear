import React, { Component, StyleSheet, PropTypes, View } from 'react-native';
import GnClickable from './GnClickable';
import GnIcon from './GnIcon';
import { gnSizes } from './configs';

class GnFabButton extends Component {
	render() {
		const { icon, gnSize, style, ...buttonProps } = this.props;

		return (
			<GnClickable style={[styles.fabBase, styles[gnSize], style]} {...buttonProps}>
				<View>
					<GnIcon icon={icon} gnSize={gnSize} color='white'/>
				</View>
			</GnClickable>
		);
	}
}

const styles = StyleSheet.create({
	fabBase: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	sm: {
		borderRadius: 15,
		width: 30,
		height: 30
	},
	md: {
		borderRadius: 20,
		width: 40,
		height: 40
	},
	lg: {
		borderRadius: 25,
		width: 50,
		height: 50
	}
});

GnFabButton.propTypes = {
	gnSize: PropTypes.oneOf(gnSizes)
};

GnFabButton.defaultProps = {
	gnSize: 'md'
};

export default GnFabButton;

