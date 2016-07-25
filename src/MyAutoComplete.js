import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import MyAvatar from './MyAvatar';

const color = [
	'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White'
];

export default class MyAutoComplete extends Component {

	constructor(props){
		super(props);
		this.state = {
			dataSource: []
		};
	}

	handleUpdateInput(value){
		this.setState({
			dataSource: [
				value,
				value + value,
				value + value + value
			],
		});
	}

	render() {
		return (
			<div>
				<AutoComplete
					floatingLabelText="Search Color"
					dataSource={color}
					filter={AutoComplete.caseInsensitiveFilter}
					maxSearchResults={2}
					disableFocusRipple={false}
					//onUpdateInput={this.handleUpdateInput.bind(this)}
				/>
				<MyAvatar />
			</div>
		);
	}
}
