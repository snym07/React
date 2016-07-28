import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class SearchBox extends Component {

	constructor(){
		super();
		this.state = {
			dataSource: [
				'Batman',
				'Superman',
				'Wonder woman',
				'Flash',
				'Green Lantern',
				'Spiderman',
				'Ironman',
				'Captain America',
				'Black Widow',
				'Black Panther',
				'Hawk eye',
				'Thor',
				'Hulk',
			],
		}
	}

	render() {
		return (
			<div>
				<AutoComplete
		      floatingLabelText="Search"
		      filter={AutoComplete.fuzzyFilter}
		      dataSource={this.state.dataSource}
		      maxSearchResults={5}
		    /> 
			</div>
		);
	}
}
