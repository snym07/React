import React, { Component } from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MyAppBar from './MyAppBar';

class App extends Component {
	render() {
		return (
			<div>
				<MuiThemeProvider>
					<MyAppBar />
				</MuiThemeProvider>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));