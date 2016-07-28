import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import SvgIcon from 'material-ui/SvgIcon';

// icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Notification from 'material-ui/svg-icons/social/public';
import People from 'material-ui/svg-icons/social/people';
import Message from 'material-ui/svg-icons/editor/mode-comment';

import PopUp from './PopUp';
import LogOut from './LogOut';
import SearchBox from './SearchBox';

export default class FbAppbar extends Component {

	render(){

		const myStyle = {
			flex: '0 1 auto',
			paddingRight: '2%',
		};

		var fbIcon = <SvgIcon>
									<path fill="#ffffff" d="M19,4V7H17A1,1 0 0,0 16,8V10H19V13H16V20H13V13H11V10H13V7.5C13,5.56 14.57,4 16.5,4M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
								</SvgIcon>;

		const title = (screen.width > 768) ? 'Facebook' : fbIcon;

		const menuButton = (screen.width > 768) ? false : true;

		return (
				<div>
					<AppBar
						title={title}
						titleStyle={myStyle}
						showMenuIconButton={menuButton}
						//children={<SearchBox/>}
						iconElementRight={
							<Toolbar style={{backgroundColor: 'transparent'}}>

								<ToolbarGroup>
									<PopUp 
										icon={<People color={'white'}/>} 
										title="Friend Requests"
										badge="5"
										content={<h2>content</h2>}
									/>

									<PopUp 
										icon={<Message color={'white'}/>} 
										title="Messages"
										badge="2"
										content={<h2>content</h2>}
									/>

									<PopUp 
										icon={<Notification color={'white'}/>} 
										title="Notifications"
										badge="12"
										content={<h2>content</h2>}
									/>
									
									<LogOut />
								</ToolbarGroup>
							</Toolbar>
						}
					/>
				</div>
			);
	}
}