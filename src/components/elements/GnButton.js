import React, { Component, StyleSheet, PropTypes, View, Text } from 'react-native';
import GnClickable from './GnClickable';
import GnProgressBar from './GnProgressBar';
import GnIcon from './GnIcon';
import { gnColors, gnSizes, gnStyels ,gnFontSm, gnFontMd, gnFontLg } from './configs';

class GnButton extends Component {
	render() {
		const { label, gnSize, gnStyle, icon, style, ...buttonProps } = this.props;

		return (
			<GnClickable {...buttonProps} style={[styles[gnSize], styles[gnStyle], style]}>
				<View style={styles.btnBase}>
					{icon&&<GnIcon style={styles.btnIcon} icon={icon} size={gnSize} color={gnStyle == 'default' ? 'gray' : 'white'}/>}
					<Text style={styles[`font${gnSize}`]}>{label}</Text>
				</View>
			</GnClickable>
		);
	};
}

const styles = StyleSheet.create({
	btnBase: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnIcon: {
		marginRight: 5
	},
	sm: {
		paddingVertical: 2,
		paddingHorizontal: 6,
		borderRadius: 3
	},
	md: {
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 4
	},
	lg: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 5
	},
	fontsm: {
		fontSize: gnFontSm
	},
	fontmd: {
		fontSize: gnFontMd
	},
	fontlg: {
		fontSize: gnFontLg
	},
	default: {
		backgroundColor: gnColors['default']
	},
	primary: {
		backgroundColor: gnColors['primary']
	},
	success: {
		backgroundColor: gnColors['success']
	},
	warning: {
		backgroundColor: gnColors['warning']
	},
	danger: {
		backgroundColor: gnColors['danger']
	}
});

GnButton.propTypes = {
	active: PropTypes.bool,
	label: PropTypes.string,
	gnSize: PropTypes.oneOf(gnSizes),
	gnStyle: PropTypes.oneOf(gnStyels),
	icon: PropTypes.string
};

GnButton.defaultProps = {
	gnSize: 'md',
	gnStyle: 'default'
};

export default GnButton;