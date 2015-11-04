import React, { Component, PropTypes, StyleSheet, View } from 'react-native';
import { GnSearchbar, GnList, GnListItem, GnLoadMoreFooter, GnIcon } from '../components/elements';
import { createSelector } from 'reselect';
import { connect } from 'react-redux/native';
import { LOAD_ITEMS, queryItems } from '../actions/crud-actions';

class ListDataSection extends Component {
	componentDidMount() {
		this.onLoadData(null, false);
	}
	render() {
		return (
			<GnList array={this.props.array}
				renderHeader={this.renderHeader.bind(this)}
				renderRow={this.renderRow.bind(this)}
				renderFooter={this.renderFooter.bind(this)}/>
		);
	}
	renderHeader() {
		return <GnSearchbar ref={search => this._searchbar = search} style={styles.content}
			placeholder={this.props.searchPlaceholder} onSearch={this.onSearch.bind(this)}/>;
	}
	renderRow(item) {
		return <GnListItem leftView={<GnIcon icon={this.props.itemIcon}/>}
					primaryText={item[this.props.itemPrimary]} secondaryText={item[this.props.itemSecondary]}
					onPress={() => this.props.onItemClicked(this.props.modelName, item)}/>
	}
	renderFooter() {
		if (this.props.total > this.props.skip) {
			return (
				<GnLoadMoreFooter loading={this.props.actionState&&!this.props.actionState.finished}
					total={this.props.total} skip={this.props.skip} onPress={this.onLoadMore.bind(this)}/>
			);
		}
	}
	onLoadMore() {
		this.onLoadData(this._searchbar.getValue(), true);
	}
	onSearch(text) {
		this.onLoadData(text, false);
	}
	onLoadData(searchText, loadMore) {
		let selection = {};
		if (searchText) {
			selection.where = { or: [
				{[this.props.itemPrimary]: { regexp: searchText }},
				{[this.props.itemSecondary]: { regexp: searchText }}
			]};
		}
		if (loadMore) {
			selection.skip = this.props.skip;
		}

		this.props.dispatch(queryItems(this.props.modelName, selection));
	}
}

const styles = StyleSheet.create({
	content: {
		margin: 5
	}
});

ListDataSection.propTypes = {
	modelName: PropTypes.string.isRequired,
	searchPlaceholder: PropTypes.string.isRequired,
	itemIcon: PropTypes.string.isRequired,
	itemPrimary: PropTypes.string.isRequired,
	itemSecondary: PropTypes.string.isRequired,
	onItemClicked: PropTypes.func
};

const actionStateSelector = createSelector(
	state => state.actionState,
	(actionState) => {
		if (LOAD_ITEMS === actionState.type) {
			return actionState;
		} else {
			return null;
		}
	}
);

const storeSelector = createSelector(
	actionStateSelector,
	state => state.array,
	state => state.app.total,
	state => state.app.skip,
	(actionState, array, total, skip) =>
		({actionState, array, total, skip})
);

export default connect(storeSelector)(ListDataSection);

