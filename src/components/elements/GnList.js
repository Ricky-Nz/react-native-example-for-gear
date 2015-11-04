import React, { Component, PropTypes, StyleSheet, ListView, View } from 'react-native';

class GnList extends Component {
	constructor(props) {
		super(props);
		this.state = this.updateNewState(props);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.array !== this.props.array) {
			this.setState(this.updateNewState(nextProps));
		}
	}
	updateNewState(props) {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			dataSource: ds.cloneWithRows(props.array),
		};
	}
	render() {
		const { array, ...listProps } = this.props;

		return (
			<ListView dataSource={this.state.dataSource}
				renderSeparator={() => <View style={styles.separator}/>}
				{...listProps}/>
		);
	}
}

const styles = StyleSheet.create({
	separator: {
		height: 1,
		backgroundColor: '#E0E0E0',
		marginHorizontal: 5
	}
});

GnList.propTypes = {
	array: PropTypes.array.isRequired
};

export default GnList;