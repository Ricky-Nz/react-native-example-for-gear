import React, { Component, TouchableHighlight } from 'react-native';

class GnClickable extends Component {
	render() {
		return (
			<TouchableHighlight {...this.props} underlayColor='#F5F5F5'>
				{this.props.children}
			</TouchableHighlight>
		);
	}
}

export default GnClickable;