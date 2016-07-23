import React, { Component } from 'react';
import {render} from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
	render() {
		return (
			<div>
				<h1>React</h1>
				<MuiThemeProvider>
				 <RaisedButton label="Default" />
				</MuiThemeProvider>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));