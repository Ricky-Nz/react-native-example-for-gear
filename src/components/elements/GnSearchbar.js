import React, { Component, PropTypes, TextInput } from 'react-native';
import GnInput from './GnInput';

class GnSearchbar extends Component {
	render() {
		return (
			<GnInput ref='input' icon='search' size='sm' placeholder={this.props.placeholder}
				onChangeText={this.onChangeText.bind(this)} style={this.props.style}/>
		);
	}
	onChangeText(text) {
		if (this.state && this.state.timer) {
			clearTimeout(this.state.timer);
		}

		if (this.props.delay > 0) {
			this.setState({
				timer: setTimeout(() => {
						this.props.onSearch(text);
					}, this.props.delay)
			});
		} else {
			this.props.onSearch(text);
		}
	}
	getValue() {
		return this.refs.input.getValue();
	}
}

GnSearchbar.propTypes = {
	placeholder: PropTypes.string,
	onSearch: PropTypes.func.isRequired,
	delay: PropTypes.number
};

GnSearchbar.defaultProps = {
	delay: 500
};

export default GnSearchbar;