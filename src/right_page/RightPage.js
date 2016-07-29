import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

import Event from 'material-ui/svg-icons/action/event';
import Trending from 'material-ui/svg-icons/action/trending-up';

export default class RightPage extends Component {
	render() {
		return (
			<div>
				<Card>
				  
				  <List>
      			<ListItem 
      				primaryText="7 event invites"
      				leftIcon={<Event />}
      				style={{color: '#536DFE',}}
      			/>
      		</List>
				  <Divider />
				  <CardText>
				  	<List>
				  		<ListItem
				  			key={1}
				  			primaryText="Avengers :"
				  			style={{color: '#536DFE',}}
				  			innerDivStyle={{paddingLeft: '40px'}}
				  			secondaryText="Celebrating Thor's birthday with Loki (he is a nice guy now)"
				  			secondaryTextLines={2}
				  			leftIcon={<Trending style={{margin: '12px 0'}} color={'#536DFE'} />}
				  		/>
				  		<ListItem
				  			key={2}
				  			primaryText="Search for Infinty Stone :"
				  			style={{color: '#536DFE',}}
				  			innerDivStyle={{paddingLeft: '40px'}}
				  			secondaryText="The Infinty Stone may be on Earth, be there before Thenos find out about it"
				  			secondaryTextLines={2}
				  			leftIcon={<Trending style={{margin: '12px 0'}} color={'#536DFE'} />}
				  		/>
				  		<ListItem
				  			key={3}
				  			primaryText="Hail Hydra :"
				  			style={{color: '#536DFE',}}
				  			innerDivStyle={{paddingLeft: '40px'}}
				  			secondaryText="Party at Hydra's hideout, free skull-masks for everyone (early birds discount)"
				  			secondaryTextLines={2}
				  			leftIcon={<Trending style={{margin: '12px 0'}} color={'#536DFE'} />}
				  		/>
				  		<ListItem
				  			primaryText={<a href="#" style={{color: '#536DFE', margin: '0 24px'}}>See more</a>}
				  		/>
				  	</List>
				    
				  </CardText>
				  
				</Card>
					<br />
				<Card>
					<p style={{padding: '20px'}}>
						English (US)
					</p>
				</Card>
				<p style={{padding: '10px'}}>
					Privacy &nbsp; · &nbsp; Terms &nbsp; · &nbsp; Advertising &nbsp; · &nbsp; Cookies &nbsp; · &nbsp; More 
				</p>
			</div>
		);
	}
}
