import React, { Component, StyleSheet, PropTypes, Navigator, View, Text } from 'react-native';
import { GnTabBar, GnSearchbar, GnTitlebar } from '../components/elements';
import { createSelector } from 'reselect';
import { connect } from 'react-redux/native';
import { queryScripts, queryParameters, queryPackages, queryReports } from '../actions/crud-actions';
import { SearchList } from '../components';
import _ from 'underscore';

class HomePage extends Component {
	render() {
		return (
			<View style={styles.content}>
				<GnTitlebar title='Home Page' rightIcon='sign-out'/>
				<Navigator ref='nav' style={styles.content}
					initialRoute={this.props.tabs[0]} renderScene={this.renderSection.bind(this)}/>
				<GnTabBar tabs={this.props.tabs} selectIndex={0}
					onSelectTab={this.onSelectTab.bind(this)}/>
			</View>
		);
	}
	renderSection(route, navigator) {
		switch(route.label) {
			case 'Script':
				return <SearchList searchPlaceholder='search for title or tag'
					array={this.props.scripts} itemIcon='file-text-o'
					itemPrimary='title' itemSecondary='date'
					args={route.label} onLoadData={this.onLoadData.bind(this)}
					onItemClicked={this.props.onScriptSelected}/>;
			case 'Parameter':
				return <SearchList searchPlaceholder='search for key or value'
					array={this.props.parameters} itemIcon='code'
					itemPrimary='key' itemSecondary='value'
					args={route.label} onLoadData={this.onLoadData.bind(this)}/>;
			case 'Package':
				return <SearchList searchPlaceholder='search for title or description'
					array={this.props.packages} itemIcon='android'
					itemPrimary='title' itemSecondary='description'
					args={route.label} onLoadData={this.onLoadData.bind(this)}/>;
			case 'Report':
				return <SearchList searchPlaceholder='search for title or date'
					array={this.props.reports} itemIcon='flag'
					itemPrimary='title' itemSecondary='date'
					args={route.label} onLoadData={this.onLoadData.bind(this)}/>;
		}
	}
	onSelectTab(index) {
		var currentRoutes = this.refs.nav.getCurrentRoutes();
		const nextRoute = this.props.tabs[index];
		this.refs.nav.replace(nextRoute);
	}
	onLoadData(args, searchText, loadMore, ...searchables) {
		let selection = {};
		if (searchText) {
			const searchItems = searchables.map(item => (
				{[item]: { regexp: searchText }}
			));
			selection.where = { or: searchItems };
		}
		if (loadMore) {
			selection.skip = this.props.skip;
		}

		switch(args) {
			case 'Script':
				return this.props.dispatch(queryScripts(selection));
			case 'Parameter':
				return this.props.dispatch(queryParameters(selection));
			case 'Package':
				return this.props.dispatch(queryPackages(selection));
			case 'Report':
				return this.props.dispatch(queryReports(selection));
		}
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1
	}
});

HomePage.propTypes = {
	onScriptSelected: PropTypes.func.isRequired
};

const loginStateSelector = createSelector(
	state => state.user.accessToken,
	accessToken => {
		return {
			accessToken,
			tabs: [
				{ label: 'Script', icon: 'pencil' },
				{ label: 'Parameter', icon: 'code' },
				{ label: 'Package', icon: 'bug' },
				{ label: 'Report', icon: 'flag' }
			]
		}
	}
)

const storeSelector = createSelector(
	loginStateSelector,
	state => state.scripts,
	state => state.parameters,
	state => state.packages,
	state => state.reports,
	(loginState, scripts, parameters, packages, reports) =>
		({...loginState, scripts, parameters, packages, reports})
);

export default connect(storeSelector)(HomePage);


