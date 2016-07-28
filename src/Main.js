import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import FbAppBar from './app_bar/FbAppBar';
import BodyContent from './BodyContent';

export default class Main extends Component {
	render() {
		return (
			<div>
				<FbAppBar />
				<BodyContent />
			</div>
		);
	}
}
