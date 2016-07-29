import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default class FriendRequestPopUp extends Component {
	render() {
		return (
			<div>
				<List>
		      
		      <ListItem
		      	key={1}
		        primaryText="Thenos"
		        leftAvatar={<Avatar src="images/thenos.jpg" />}
		        initiallyOpen={false}
		        primaryTogglesNestedList={true}
		        nestedItems={[
			          <RaisedButton label="Confirm" primary={true} style={{margin: '0 5px'}}/>,
			          <RaisedButton label="Delete " secondary={true} style={{margin: '0 5px'}} />,
		          ]} 
		      />

		      <ListItem
		      	key={2}
		        primaryText="Dr. Strange"
		        leftAvatar={<Avatar src="images/dr_strange.png" />}
		        initiallyOpen={false}
		        primaryTogglesNestedList={true}
		        nestedItems={[
			          <RaisedButton label="Confirm" primary={true} style={{margin: '0 5px'}}/>,
			          <RaisedButton label="Delete " secondary={true} style={{margin: '0 5px'}} />,
		          ]} 
		      />

		      <ListItem
		      	key={3}
		        primaryText="Loki"
		        leftAvatar={<Avatar src="images/loki.jpg" />}
		        initiallyOpen={false}
		        primaryTogglesNestedList={true}
		        nestedItems={[
			          <RaisedButton label="Confirm" primary={true} style={{margin: '0 5px'}}/>,
			          <RaisedButton label="Delete " secondary={true} style={{margin: '0 5px'}} />,
		          ]} 
		      />

		      <ListItem
		      	key={4}
		        primaryText="Groot"
		        leftAvatar={<Avatar src="images/groot.jpg" />}
		        initiallyOpen={false}
		        primaryTogglesNestedList={true}
		        nestedItems={[
			          <RaisedButton label="Confirm" primary={true} style={{margin: '0 5px'}}/>,
			          <RaisedButton label="Delete " secondary={true} style={{margin: '0 5px'}} />,
		          ]} 
		      />

		      <ListItem
		      	key={5}
		        primaryText="Tony Stark"
		        leftAvatar={<Avatar src="images/tony_stark.png" />}
		        initiallyOpen={false}
		        primaryTogglesNestedList={true}
		        nestedItems={[
			          <RaisedButton label="Confirm" primary={true} style={{margin: '0 5px'}}/>,
			          <RaisedButton label="Delete " secondary={true} style={{margin: '0 5px'}} />,
		          ]} 
		      />
		      
		    </List>
			</div>
		);
	}
}
