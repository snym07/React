import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class MyAppBar extends Component {
	
	constructor(props) {
    super(props);
    this.state = {open: false};
    //this.state.open = false;
  }

  handleToggle(){
  	return (this.setState({open: !this.state.open}));
  	//this.setState({open: true});
  }

  handleClose(){ 
  	this.setState({open: false});
  }

	render(){
		return (
				<div>
					<AppBar
				    title="React Material UI"
				    iconClassNameRight="muidocs-icon-navigation-expand-more"
				    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
				  />

					<Drawer 
						docked={false}
	          width={200}
	          open={this.state.open}
	          onRequestChange={(open) => this.setState({open})}
					>
	          <MenuItem>Menu Item</MenuItem>
	          <MenuItem>Menu Item 2</MenuItem>
	        </Drawer>

				</div>
			);
	}
}