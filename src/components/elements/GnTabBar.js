import React, { Component, StyleSheet, PropTypes, View, Text } from 'react-native';
import GnIcon from './GnIcon';
import GnClickable from './GnClickable';

class GnTabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {selectIndex: props.defaultSelectIndex||0};
	}
	render() {
		const { tabs, barTintColor, tintColor } = this.props;
		const tabViews = tabs.map((tab, index) => (
			<GnClickable key={index} style={styles.tabItem}
				onPress={this.onSelectTab.bind(this, index)}>
				<View style={[styles.tabContent, index === this.state.selectIndex ? styles.tabSelected : null]}>
					<GnIcon icon={tab.icon} gnSize='sm' color={tintColor}/>
					<Text style={{color: tintColor, fontSize: 12, marginLeft: 4}}>{tab.label}</Text>
				</View>
			</GnClickable>
		));

		return (
			<View style={[styles.content, {backgroundColor: barTintColor}]}>
				{tabViews}
			</View>
		);
	}
	onSelectTab(index) {
		this.setState({selectIndex: index});
		this.props.onSelectTab(index);
	}
}

GnTabBar.propTypes = {
	barTintColor: PropTypes.string,
	tintColor: PropTypes.string,
	defaultSelectIndex: PropTypes.number,
	tabs: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	})).isRequired,
	onSelectTab: PropTypes.func.isRequired
};

GnTabBar.defaultProps = {
	barTintColor: '#00BCD4',
	tintColor: 'white',
	defaultSelectIndex: 0
};

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		height: 40
	},
	tabItem: {
		flex: 1
	},
	tabContent: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabSelected: {
		borderBottomWidth: 4,
		borderBottomColor: '#FFEB3B',
		borderStyle: 'solid'
	}
});

export default GnTabBar;