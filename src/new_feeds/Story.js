import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';

import CommentBox from './CommentBox';

export default class Story extends Component {
	render() {

		const styles = (screen.width > 768) ? 'styles-desktop' : 'styles-mobile' ;

		return (
			<div className="row">
				<div className="col-xs-12" className={styles}>
					<Card>
				    <CardHeader
				      title={this.props.userName}
				      subtitle={this.props.userDate}
				      avatar={this.props.userDP}
				    />
				    <CardText>
				      {this.props.storyDescription}
				    </CardText>
				    <CardMedia>
				      <img src={this.props.storyUserDP} />
				    </CardMedia>
				    <CommentBox 
				    	commentUserDP={this.props.commentUserDP} 
				    	likePeople={this.props.likePeople}
				    	likeNumber={this.props.likeNumber}
				    />
				  </Card>
				</div>
			</div>
		);
	}
}
