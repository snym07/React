import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import FbAppBar from './FbAppBar';

export default class Main extends Component {
	render() {
		return (
			<div>
				<FbAppBar />
				<FloatingActionButton secondary={true} />
			</div>
		);
	}
}
