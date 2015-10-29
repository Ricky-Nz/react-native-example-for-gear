import React, { Component, PropTypes, StyleSheet, View, Text } from 'react-native';
import GnIcon from './GnIcon';

class GnTitlebar extends Component {
	render() {
		return (
			<View style={styles.content}>
				<View style={styles.actionContent}>
					{this.props.leftIcon&&<GnIcon icon={this.props.leftIcon} color='white'/>}
				</View>
				<View style={styles.titleContent}>
					<Text style={styles.title}>{this.props.title}</Text>
				</View>
				<View style={styles.actionContent}>
					{this.props.rightIcon&&<GnIcon icon={this.props.rightIcon} color='white'/>}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 15,
		backgroundColor: '#00BCD4'
	},
	titleContent: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 6,
		flex: 6
	},
	actionContent: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 6,
		flex: 1
	},
	title: {
		color: 'white',
		fontSize: 20
	}
});

GnTitlebar.propTypes = {
	title: PropTypes.string.isRequired,
	leftIcon: PropTypes.string,
	rightIcon: PropTypes.string
};

export default GnTitlebar;