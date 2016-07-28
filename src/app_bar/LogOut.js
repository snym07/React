import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

export default class LogOut extends Component {
	render() {
		return (
			<div>
				<IconMenu
	        iconButtonElement={
	          <IconButton><ArrowDropDown color={'white'} /></IconButton>
	        }
	        targetOrigin={{horizontal: 'right', vertical: 'top'}}
	        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	      >
	        <MenuItem primaryText="Create page" />
	        <MenuItem primaryText="Manage page" />
	        <MenuItem primaryText="Activity log" />
	        <MenuItem primaryText="Settings" />
	        <MenuItem primaryText="Help" />
	        <MenuItem primaryText="Log out" />
	      </IconMenu>
			</div>
		);
	}
}
