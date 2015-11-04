import React, { Component, StyleSheet, PropTypes, View, Text } from 'react-native';
import GnIcon from './GnIcon';
import GnClickable from './GnClickable';

class GnLoadMoreFooter extends Component {
	render() {
		const { loading, ...contentProps } = this.props;

		return (
			<GnClickable {...contentProps}>
				<View style={styles.content}>
					<Text>{loading ? 'loading...' : `Load more (${this.props.skip}\/${this.props.total})`}</Text>
				</View>
			</GnClickable>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		height: 60
	}
});

GnLoadMoreFooter.propTypes = {
	loading: PropTypes.bool.isRequired,
	total: PropTypes.number.isRequired,
	skip: PropTypes.number.isRequired
};

export default GnLoadMoreFooter;

