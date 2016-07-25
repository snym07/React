import React, { Component } from 'react';
import {render} from 'react-dom';
import {indigo500, indigo700, redA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Main from './Main';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: indigo500,
		primary2Color: indigo700,
		accent1Color: redA200,
		pickerHeaderColor: indigo500,
	},
	appBar: {
		//backgroundColor: indigo500,
	},
});

class App extends Component {
	render() {
		return (
			<div>
				<MuiThemeProvider muiTheme={muiTheme}>
					<Main />
				</MuiThemeProvider>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));