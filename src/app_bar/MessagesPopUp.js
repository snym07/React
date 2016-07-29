import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

export default class MessagesPopUp extends Component {
	render() {
		return (
			<div>
				<List>
	        <Subheader>Today</Subheader>
	        <ListItem
	        	key={1}
	          leftAvatar={<Avatar src="images/superman.jpg" />}
	          primaryText="Like my photo please..."
	          secondaryText={
	            <p>
	              <span style={{color: darkBlack}}>Superman</span> --
	              I&apos;just went to the space and clicked an amazing photo, please like it. I want more likes than Batman
	            </p>
	          }
	          secondaryTextLines={2}
	        />
	        <Divider />
	        <ListItem
	        	key={2}
	          leftAvatar={<Avatar src="images/wonder_woman.png" />}
	          primaryText="Let's kill crime?"
	          secondaryText={
	            <p>
	              <span style={{color: darkBlack}}>Wonder Woman</span> --
	              I&apos;ll be in your neighborhood fighting crime this weekend. Do you want to join?
	            </p>
	          }
	          secondaryTextLines={2}
	        />
	       </List>
			</div>
		);
	}
}
