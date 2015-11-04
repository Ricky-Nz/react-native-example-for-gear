import React, { Component, PropTypes, StyleSheet } from 'react-native';
import { Icon } from 'react-native-icons';

class GnIcon extends React.Component {
	render() {
		const { icon, size, color } = this.props;
		const iconStyle = styles[size];
		let iconSize;
		switch (size) {
			case 'sm': iconSize = 22; break;
			case 'md': iconSize = 33; break;
			case 'lg': iconSize = 44; break;
		}

		return <Icon name={`fontawesome|${icon}`}
			size={iconSize} style={[iconStyle, this.props.style]} color={color}/>;
	}
}

GnIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	color: PropTypes.string
};

GnIcon.defaultProps = {
	size: 'sm'
};

const styles = StyleSheet.create({
	sm: {
		width: 24,
		height: 24,
		margin: 2
	},
	md: {
		width: 36,
		height: 36,
		margin: 3
	},
	lg: {
		width: 48,
		height: 48,
		margin: 4
	}
});

export default GnIcon;