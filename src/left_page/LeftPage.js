import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
//import DatePicker from 'material-ui/DatePicker';

import Event from 'material-ui/svg-icons/action/event';
import NewFeeds from 'material-ui/svg-icons/action/payment';
import Messages from 'material-ui/svg-icons/communication/forum';
import Games from 'material-ui/svg-icons/av/games';
import Photos from 'material-ui/svg-icons/image/photo-library';
import PhotoAlbum from 'material-ui/svg-icons/image/photo-album';
import Saved from 'material-ui/svg-icons/action/bookmark';
import Star from 'material-ui/svg-icons/action/grade';
import Heart from 'material-ui/svg-icons/action/favorite-border';
import Fire from 'material-ui/svg-icons/social/whatshot';



export default class LeftPage extends Component {
	render() {
		return (
			<div>
				<List>
					<ListItem style={{color: '#536DFE'}} primaryText="New Feeds" leftIcon={<NewFeeds color='#536DFE'/>} />
					<ListItem primaryText="Messages" leftIcon={<Messages />} />
					<ListItem primaryText="Events" leftIcon={<Event />} />
				</List>
				<Divider />

				<Subheader>Apps</Subheader>
				<List>
					<ListItem primaryText="Games" leftIcon={<Games />} />
					<ListItem primaryText="On This Day" leftIcon={<PhotoAlbum />} />
					<ListItem primaryText="Photos" leftIcon={<Photos />} />
					<ListItem primaryText="Saved" leftIcon={<Saved />} />
				</List>
				<Divider />

				<Subheader>Groups</Subheader>
				<List>
					<ListItem primaryText="Justice League" leftIcon={<Star />} />
					<ListItem primaryText="Avengers" leftIcon={<Fire />} />
					<ListItem primaryText="Hydra" leftIcon={<Heart />} />
					<ListItem primaryText="Captains Only" leftIcon={<Star />} />
					<ListItem primaryText="Marvel Rocks" leftIcon={<NewFeeds />} />
				</List>
				<Divider />

				<Subheader>Friends</Subheader>
				<List>
					<ListItem primaryText="Family" leftIcon={<Heart />} />
					<ListItem primaryText="Shield" leftIcon={<PhotoAlbum />} />
					<ListItem primaryText="1800's" leftIcon={<Event />} />
					<ListItem primaryText="Avengers" leftIcon={<Fire />} />
				</List>
				<Divider />
			</div>
		);
	}
}
