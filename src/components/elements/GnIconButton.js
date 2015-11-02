import React, { Component, StyleSheet, PropTypes } from 'react-native';
import GnClickable from './GnClickable';
import GnIcon from './GnIcon';

class GnIconButton extends Component {
	render() {
		const { icon, iconSize, iconColor, ...buttonProps } = this.props;

		return (
			<GnClickable {...buttonProps}>
				<GnIcon icon={icon} size={iconSize} color={iconColor}/>
			</GnClickable>
		);
	};
}

export default GnIconButton;