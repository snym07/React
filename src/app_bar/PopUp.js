import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';

export default class PopUp extends Component {

	constructor(){
		super();
		this.state = {
			open: false,
		}

		this.handleClose = this.handleClose.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
	}

	handleOpen(){
		this.setState({open : true});
	}

	handleClose(){
		this.setState({open : false});
	}

	render() {

		const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

		return (	
			<div>
        <div onClick={this.handleOpen}>
        	<Badge
	        	badgeContent={this.props.badge}
	        	primary={true}
	        	style={{padding: '0', cursor: 'pointer'}}
	        >
	        	<IconButton
	        		tooltip={this.props.title} 
	        		style={{padding: '0'}}
		        	//onTouchTap={this.handleOpen}
		        	>
		        	{this.props.icon} 
		        </IconButton>
	        </Badge>
        </div>
	        
	      <Dialog
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
        	{this.props.content}
        </Dialog>
      </div>
		);
	}
}
