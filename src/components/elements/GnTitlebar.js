import React, { Component, PropTypes, StyleSheet, View, Text } from 'react-native';
import GnIconButton from './GnIconButton';

class GnTitlebar extends Component {
	render() {
		return (
			<View style={styles.content}>
				<View style={styles.actionContent}>
					{this.props.leftIcon&&<GnIconButton icon={this.props.leftIcon}
						iconColor='white' onPress={this.props.onLeftBtnClicked}/>}
				</View>
				<View style={styles.titleContent}>
					<Text style={styles.title}>{this.props.title}</Text>
				</View>
				<View style={styles.actionContent}>
					{this.props.rightIcon&&<GnIconButton icon={this.props.rightIcon}
						iconColor='white' onPress={this.props.onRightBtnClicked}/>}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		height: 70,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 25,
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
	rightIcon: PropTypes.string,
	onLeftBtnClicked: PropTypes.func,
	onRightBtnClicked: PropTypes.func
};

export default GnTitlebar;


