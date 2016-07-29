import React, { Component } from 'react';

//import StatusUpdate from './StatusUpdate';
import Story from './Story';

export default class NewFeeds extends Component {
	render() {
		return (
			<div>
				{//<StatusUpdate />
				}
				<Story 
					userDP="images/captain_america.png"
					userName="Captain America"
					userDate="27th July, Instagram"
					storyDescription="Jumping from the plane in the air like i just don't care!!"
					storyUserDP="images/first.jpg"
					commentUserDP="images/captain_america.png"
					likePeople="Batman, Superman"
				  likeNumber="64"
				/>
				<Story 
					userDP="images/batman.jpg"
					userName="I am Batman"
					userDate="26th June, Instagram"
					storyDescription="The place where I kicked Superman's ass..."
					storyUserDP="images/second.jpg"
					commentUserDP="images/captain_america.png"
					likePeople="Wonder Woman, Flash"
				  likeNumber="144"
				/>
				<Story 
					userDP="images/superman.jpg"
					userName="Superman"
					userDate="12th June, Orkut"
					storyDescription="Picture I took from outer space... Amazing right? right!?"
					storyUserDP="images/third.jpg"
					commentUserDP="images/captain_america.png"
					likePeople="Clark Kent"
				  likeNumber="2"
				/>
				<Story 
					userDP="images/wonder_woman.png"
					userName="Wonder Woman"
					userDate="10th June, Instagram"
					storyDescription="Celebrating friend's birthday!!"
					storyUserDP="images/forth.jpg"
					commentUserDP="images/captain_america.png"
					likePeople="Superman, Batman"
				  likeNumber="201"
				/>
				<Story 
					userDP="images/batman.jpg"
					userName="I am Batman"
					userDate="28th May, Instagram"
					storyDescription="Money money money money money money money money..."
					storyUserDP="images/fifth.jpg"
					commentUserDP="images/captain_america.png"
					likePeople="Wonder Woman, Flash"
				  likeNumber="120"
				/>
				
			</div>
		);
	}
}
