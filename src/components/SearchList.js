import React, { Component, PropTypes, StyleSheet } from 'react-native';
import { GnSearchbar, GnList, GnListItem } from './elements';

class SearchList extends Component {
	componentDidMount() {
		console.log(`SearchList mount ${this.props.args}`);
		this.props.onLoadData(this.props.args, null, false, this.props.primary, this.props.secondary);
	}
	render() {
		console.log(`SearchList render ${this.props.args}`);
		return (
			<GnList array={this.props.array}
				renderHeader={this.renderHeader.bind(this)}
				renderRow={this.renderRow.bind(this)}/>
		);
	}
	renderHeader() {
		return <GnSearchbar style={styles.content} placeholder={this.props.searchPlaceholder} onSearch={this.onSearch.bind(this)}/>;
	}
	renderRow(item) {
		return <GnListItem icon={this.props.itemIcon} onPress={() => this.props.onItemClicked(item)}
			primary={item[this.props.itemPrimary]} secondary={item[this.props.itemSecondary]}/>
	}
	onSearch(text) {
		this.props.onLoadData(this.props.args, text, false, this.props.primary, this.props.secondary);
	}
}

const styles = StyleSheet.create({
	content: {
		margin: 5
	}
});

SearchList.propTypes = {
	args: PropTypes.string,
	searchPlaceholder: PropTypes.string.isRequired,
	array: PropTypes.array.isRequired,
	itemIcon: PropTypes.string.isRequired,
	itemPrimary: PropTypes.string.isRequired,
	itemSecondary: PropTypes.string.isRequired,
	onLoadData: PropTypes.func.isRequired,
	onItemClicked: PropTypes.func
};

export default SearchList;

