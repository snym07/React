import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import Notification from 'material-ui/svg-icons/social/public';
import People from 'material-ui/svg-icons/social/people';
import Message from 'material-ui/svg-icons/editor/mode-comment';


export default class FbAppbar extends Component {

	constructor(){
		super();
		this.state = {
			open: false,
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

	handleOpen(){
		this.setState({open : true});
	}

	handleClose(){
		this.setState({open : false});
	}

	render(){

		const myStyle = {
			flex: '0 1 auto',
			paddingRight: '2%'
		};

		const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

		return (
				<div>
					<AppBar
						title="Facebook"
						titleStyle={myStyle}
						showMenuIconButton={false}
						// children={
				  //   	<div>
				  //   	<AutoComplete
					 //      floatingLabelText="Type 'peah', fuzzy search"
					 //      filter={AutoComplete.fuzzyFilter}
					 //      dataSource={this.state.dataSource}
					 //      maxSearchResults={5}
					 //    />
					 //    </div>
				  //   }
						iconElementRight={
							<div>
			          <IconButton 
			          	onTouchTap={this.handleOpen.bind(this)}
			          	>
			          	<People color={'white'} />
			          </IconButton>
					        
					      <Dialog
				          title="Friend Requests"
				          actions={actions}
				          modal={false}
				          open={this.state.open}
				          onRequestClose={this.handleClose.bind(this)}
				          autoScrollBodyContent={true}
				        >
				        </Dialog>

					      <IconButton 
			          	onTouchTap={this.handleOpen.bind(this)}
			          	>
			          	<Message color={'white'} />
			          </IconButton>
					        
					      <Dialog
				          title="Messages"
				          //actions={actions}
				          modal={false}
				          open={this.state.open}
				          onRequestClose={this.handleClose.bind(this)}
				          autoScrollBodyContent={true}
				        >
				        </Dialog>

					      <IconButton 
			          	onTouchTap={this.handleOpen.bind(this)}
			          	>
			          	<Notification color={'white'} />
			          </IconButton>
					        
					      <Dialog
				          title="Notifications"
				          //actions={actions}
				          modal={false}
				          open={this.state.open}
				          onRequestClose={this.handleClose.bind(this)}
				          autoScrollBodyContent={true}
				        >
				        </Dialog>

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
				    }
					/>
				</div>
			);
	}
}