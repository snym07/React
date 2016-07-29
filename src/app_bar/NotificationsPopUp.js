import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import { Card, CardHeader } from 'material-ui/Card';

export default class NotificationsPopUp extends Component {
	render() {
		const styles={
			padding: '10px',
		}
		return (
			<div>
				<List>
					
						<ListItem innerDivStyle={{padding: '0'}}>
							<CardHeader
								title="Superman liked your photo"
								subtitle="Just now"
								avatar="images/superman.jpg"
								style={styles}
							/>
						</ListItem>
						<ListItem innerDivStyle={{padding: '0'}}>
							<CardHeader
								title="Superman liked your photo"
								subtitle="Just now"
								avatar="images/superman.jpg"
								style={styles}
							/>
						</ListItem>
						<ListItem innerDivStyle={{padding: '0'}}>
							<CardHeader
								title="Superman liked your photo"
								subtitle="Just now"
								avatar="images/superman.jpg"
								style={styles}
							/>
						</ListItem>
						<ListItem innerDivStyle={{padding: '0'}}>
							<CardHeader
								title="Superman liked your photo"
								subtitle="1 min ago"
								avatar="images/superman.jpg"
								style={styles}
							/>
						</ListItem>
						<ListItem innerDivStyle={{padding: '0'}}>
							<CardHeader
								title="Superman liked your photo"
								subtitle="1 min ago"
								avatar="images/superman.jpg"
								style={styles}
							/>
						</ListItem>
						<ListItem innerDivStyle={{padding: '0'}}>
							<CardHeader
								title="Superman liked your photo"
								subtitle="1 min ago"
								avatar="images/superman.jpg"
								style={styles}
							/>
						</ListItem>
						<ListItem innerDivStyle={{padding: '0'}}>
							<CardHeader
								title="Superman liked your photo"
								subtitle="1 min ago"
								avatar="images/superman.jpg"
								style={styles}
							/>
						</ListItem>
						<ListItem innerDivStyle={{padding: '0'}}>
							<CardHeader
								title="Superman liked your photo"
								subtitle="1 min ago"
								avatar="images/superman.jpg"
								style={styles}
							/>
						</ListItem>
						<ListItem innerDivStyle={{padding: '0'}}>
							<CardHeader
								title="Superman liked your photo"
								subtitle="2 mins ago"
								avatar="images/superman.jpg"
								style={styles}
							/>
						</ListItem>
						<ListItem innerDivStyle={{padding: '0'}}>
							<CardHeader
								title="Superman liked your photo"
								subtitle="2 mins ago"
								avatar="images/superman.jpg"
								style={styles}
							/>
						</ListItem>
						<ListItem innerDivStyle={{padding: '0'}}>
							<CardHeader
								title="Superman liked your photo"
								subtitle="2 mins ago"
								avatar="images/superman.jpg"
								style={styles}
							/>
						</ListItem>
						<ListItem innerDivStyle={{padding: '0'}}>
							<CardHeader
								title="Superman liked your photo"
								subtitle="2 mins ago"
								avatar="images/superman.jpg"
								style={styles}
							/>
						</ListItem>
						
					
				</List>
			</div>
		);
	}
}
