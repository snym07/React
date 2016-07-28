import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

export default class MyAvatar extends Component {
	render() {
		return (
			<div className="my-color col-xs-6">
				<Checkbox
				  id="checkboxId1"
				  name="checkboxName1"
				  value="checkboxValue1"
				  label="went for a run today"
				  style={{
				    width: '100%',
				    margin: '0 auto'
				  }}
				  iconStyle={{
				    fill: '#FF4081'
				  }}
				  className=""
				  />

			</div>
		);
	}
}