import React, { Component, ProgressBarAndroid } from 'react-native';

class GnProgressBar extends Component {
	render() {
		return (
			<ProgressBarAndroid {...this.props}/>
		);
	}
}

GnProgressBar.defaultProps = {
	styleAttr: 'Small'
};

export default GnProgressBar;