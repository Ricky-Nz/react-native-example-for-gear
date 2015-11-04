import React, { Component, TouchableHighlight } from 'react-native';

class GnClickable extends Component {
	render() {
		return (
			<TouchableHighlight {...this.props} underlayColor='#E0F7FA'>
				{this.props.children}
			</TouchableHighlight>
		);
	}
}

export default GnClickable;