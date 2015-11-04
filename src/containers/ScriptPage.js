import React, { Component, StyleSheet, PropTypes, View, Text } from 'react-native';
import { GnInput, GnTitlebar, GnTag, GnIcon, GnButton } from '../components/elements';

class ScriptPage extends Component {
	render() {
		const script = this.props.script;
		const tagViews = script.tags.map((tag, index) => <GnTag key={index} label={tag} style={styles.tagItem}/>);
		const actionViews = script.actions.map((action, index) => {
			return (
				<View>
					<View style={styles.actionHeader}>
						<Text style={styles.actionIndex}>{index + 1}</Text>
						<GnButton label='Insert'/>
						<GnButton label='Delete'/>
					</View>
					<View style={styles.contentHorizontal}>
						<GnButton label={action.actionType||'select action?'}/>
						<GnInput style={styles.actionInput} defaultValue={action.actionArgs}/>
					</View>
					<View style={styles.contentHorizontal}>
						<GnButton label={action.findType||'find type?'}/>
						<GnInput style={styles.actionInput} defaultValue={action.findArgs}/>
					</View>
				</View>
			);
		});

		return (
			<View style={styles.content}>
				<GnTitlebar title='Test Script' leftIcon='chevron-left' rightIcon='floppy-o'
					onLeftBtnClicked={this.onTitleLeftBtnClicked.bind(this)}
					onRightBtnClicked={this.onTitleRightBtnClicked.bind(this)}/>
				<GnInput ref='title' placeholder='script title' icon='pencil'
					iconSize='sm' iconColor='gray' defaultValue={script&&script.title}/>
				<View style={styles.contentHorizontal}>
					<GnIcon icon='tags' color='gray' size='sm' style={styles.rowIcon}/>
					<View style={styles.tagContent}>
						{tagViews}
					</View>
				</View>
				<Text>Actions</Text>
				{actionViews}
			</View>
		);
	}
	onTitleLeftBtnClicked() {
		this.props.navigator.pop();
	}
	onTitleRightBtnClicked() {

	}
	onActionTypeClicked() {

	}
	onFindTypeClicked() {

	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: 'white'
	},
	contentHorizontal: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	tagContent: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		flex: 1
	},
	tagItem: {
		marginHorizontal: 4,
		marginBottom: 4
	},
	actionHeader: {
		paddingHorizontal: 6,
		marginHorizontal: 6,
		backgroundColor: '#E0F7FA',
		borderRadius: 4,
		flexDirection: 'row',
		alignItems: 'center'
	},
	actionInput: {
		flex: 1
	},
	actionIndex: {
		flex: 1
	},
	rowIcon: {
		marginHorizontal: 12
	}
});

ScriptPage.propTypes = {
	script: PropTypes.object.isRequired
};

export default ScriptPage;