import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

import LikeIcon from 'material-ui/svg-icons/Action/thumb-up';
import CommentIcon from 'material-ui/svg-icons/Editor/mode-comment';
import ShareIcon from 'material-ui/svg-icons/Content/reply';

export default class CommentBox extends Component {

	constructor(){
		super();
		this.state = {
			like: true
		};
		this.liked = this.liked.bind(this);
	}

	liked(){
		this.setState({like: !this.state.like});
	}

	render() {

		const text = this.state.like ? 'Like' : 'Unlike';
		const myLike = this.state.like ? '' : 'You, ';

		return (
			<div>
				<div className="like-comment-share">
					<a onClick={this.liked}>
						<span><LikeIcon color="#3F51B5" /></span> {text}
					</a>
					<a>
						<span><CommentIcon color="#3F51B5"/></span> Comment
					</a>
					<a>
						<span><ShareIcon color="#3F51B5" /></span> Share
					</a>
				</div>

				<div className="likes">
						<span className="like-color">{myLike} {this.props.likePeople} </span>
						 and <span className="like-color">{this.props.likeNumber} others</span> liked this
				</div>

				<Divider />

				<div className="comments">
					<Avatar className="user-avatar" src={this.props.commentUserDP} />
					<TextField 
						hintText="Write a comment..." 
						multiLine={true}
						rowsMax={3}
						className="user-comment"
					/>
				</div>
			</div>
		);
	}
}
