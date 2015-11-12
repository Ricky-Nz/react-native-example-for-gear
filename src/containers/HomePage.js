import React, { Component, StyleSheet, PropTypes, Navigator, View, Text } from 'react-native';
import { GnTabBar, GnSearchbar, GnTitlebar, GnFabButton } from '../components/elements';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import ListDataSection from './ListDataSection';

class HomePage extends Component {
	render() {
		return (
			<View style={styles.content}>
				<GnTitlebar title='Home Page' rightIcon='sign-out'/>
				<GnTabBar tabs={this.props.tabs}
					onSelectTab={this.onSelectTab.bind(this)}/>
				<Navigator ref='nav' style={styles.content}
					initialRoute={this.props.tabs[0]} renderScene={this.renderSection.bind(this)}/>
				<GnFabButton style={styles.bottomBtn} icon='plus'/>
			</View>
		);
	}
	renderSection(route, navigator) {
		let listDataConfig = {
			modelName: route.label,
			onItemClicked: this.onItemClicked.bind(this)
		};

		switch(route.label) {
			case 'Script':
				listDataConfig.searchPlaceholder='search for title or tag';
				listDataConfig.itemIcon='file-text-o';
				listDataConfig.itemPrimary='title';
				listDataConfig.itemSecondary = 'date';
				break;
			case 'Parameter':
				listDataConfig.searchPlaceholder='search for key or value';
				listDataConfig.itemIcon='code';
				listDataConfig.itemPrimary='key';
				listDataConfig.itemSecondary = 'value';
				break;
			case 'Package':
				listDataConfig.searchPlaceholder='search for title or description';
				listDataConfig.itemIcon='android';
				listDataConfig.itemPrimary='title';
				listDataConfig.itemSecondary = 'description';
				break;
			case 'Report':
				listDataConfig.searchPlaceholder='search for title or date';
				listDataConfig.itemIcon='flag';
				listDataConfig.itemPrimary='title';
				listDataConfig.itemSecondary = 'date';
				break;
		}

		return <ListDataSection {...listDataConfig}/>
	}
	onItemClicked(modelName, item) {
		switch(modelName) {
			case 'Script':
				return this.props.navigator.push({page: 'script', script: item});
			case 'Prameter':
				return this.props.navigator.push({page: 'parameter'});
			case 'Package':
				return this.props.navigator.push({page: 'package'});
			case 'Report':
				return this.props.navigator.push({page: 'report'});
		}
	}
	onSelectTab(index) {
		this.refs.nav.replace(this.props.tabs[index]);
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: 'white',
		position: 'relative'
	},
	bottomBtn: {
		position: 'absolute',
		backgroundColor: '#00BCD4',
		bottom: 20,
		right: 20
	}
});

const storeSelector = createSelector(
	state => state.app.accessToken,
	accessToken => {
		return {
			tabs: [
				{ label: 'Script', icon: 'pencil' },
				{ label: 'Parameter', icon: 'code' },
				{ label: 'Package', icon: 'bug' },
				{ label: 'Report', icon: 'flag' }
			]
		};
	}
)

export default connect(storeSelector)(HomePage);


