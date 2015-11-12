import React, { Component, PropTypes, StyleSheet } from 'react-native';
import { Icon } from 'react-native-icons';
import { gnSizes } from './configs';

class GnIcon extends React.Component {
	render() {
		const iconStyle = styles[this.props.gnSize];
		let iconSize;
		switch(this.props.gnSize) {
			case 'sm': iconSize = 18; break;
			case 'md': iconSize = 26; break;
			case 'lg': iconSize = 34; break;
		}
		return <Icon name={`fontawesome|${this.props.icon}`}
					size={iconSize} style={[iconStyle, this.props.style]} color={this.props.color}/>;
	}
}

GnIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	gnSize: PropTypes.oneOf(gnSizes),
	color: PropTypes.string
};

GnIcon.defaultProps = {
	gnSize: 'sm'
};

const styles = StyleSheet.create({
	sm: {
		width: 20,
		height: 20
	},
	md: {
		width: 30,
		height: 30
	},
	lg: {
		width: 40,
		height: 40
	}
});

export default GnIcon;

