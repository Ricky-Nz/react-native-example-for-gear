import React, { Component, StyleSheet, PropTypes, View } from 'react-native';
import GnClickable from './GnClickable';
import GnIcon from './GnIcon';

class GnIconButton extends Component {
	render() {
		const { icon, iconSize, iconColor, ...buttonProps } = this.props;

		return (
			<GnClickable {...buttonProps}>
				<View>
					<GnIcon onPress={this.props.onPress} icon={icon} size={iconSize} color={iconColor}/>
				</View>
			</GnClickable>
		);
	}
}

export default GnIconButton;