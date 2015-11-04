import React, { Component, StyleSheet, PropTypes, View, Text } from 'react-native';
import GnIcon from './GnIcon';
import GnClickable from './GnClickable';

class GnTabBar extends Component {
	render() {
		const { tabs, barTintColor, tintColor, selectIndex } = this.props;
		const tabViews = tabs.map((tab, index) => (
			<GnClickable key={index} style={styles.tabItem}
				onPress={() => this.props.onSelectTab(index)}>
				<View style={styles.tabContent}>
					<GnIcon icon={tab.icon} size='sm' color={tintColor}/>
					<Text style={{color: tintColor, fontSize: 10}}>{tab.label}</Text>
				</View>
			</GnClickable>
		));

		return (
			<View style={[styles.content, {backgroundColor: barTintColor}]}>
				{tabViews}
			</View>
		);
	}
}

GnTabBar.propTypes = {
	barTintColor: PropTypes.string,
	tintColor: PropTypes.string,
	selectIndex: PropTypes.number.isRequired,
	tabs: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	})).isRequired,
	onSelectTab: PropTypes.func.isRequired
};

GnTabBar.defaultProps = {
	barTintColor: '#00BCD4',
	tintColor: 'white'
};

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		height: 50
	},
	tabItem: {
		flex: 1
	},
	tabContent: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default GnTabBar;