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
					userDate={<span>28th July, <i>Instagram</i></span>}
					storyDescription="Why is everybody so mad about Pokémon Go? They are not even real!"
					commentUserDP="images/captain_america.png"
					likePeople="Wonder Woman, Superman"
				  likeNumber="75"
				/>
				<Story 
					userDP="images/batman.jpg"
					userName="I am Batman"
					userDate={<span>26th June, <i>Instagram</i></span>}
					storyDescription="Gotham city needs some renovation"
					storyUserDP="images/second.jpg"
					commentUserDP="images/captain_america.png"
					likePeople="Wonder Woman, Flash"
				  likeNumber="144"
				/>
				<Story 
					userDP="images/superman.jpg"
					userName="Superman"
					userDate={<span>12th June, <i>Orkut</i></span>}
					storyDescription="Picture I took from outer space... Amazing right? right!?"
					storyUserDP="images/third.jpg"
					commentUserDP="images/captain_america.png"
					likePeople="Clark Kent"
				  likeNumber="2"
				/>
				<Story 
					userDP="images/captain_america.png"
					userName="Captain America"
					userDate={<span>27th July, <i>Instagram</i></span>}
					storyDescription="Jumping from the plane in the air like i just don't care!!"
					storyUserDP="images/first.jpg"
					commentUserDP="images/captain_america.png"
					likePeople="Batman, Superman"
				  likeNumber="64"
				/>
				<Story 
					userDP="images/wonder_woman.png"
					userName="Wonder Woman"
					userDate={<span>10th June, <i>Instagram</i></span>}
					storyDescription="Celebrating friend's birthday!!"
					storyUserDP="images/forth.jpg"
					commentUserDP="images/captain_america.png"
					likePeople="Superman, Batman"
				  likeNumber="201"
				/>
				<Story 
					userDP="images/batman.jpg"
					userName="I am Batman"
					userDate={<span>28th May, <i>Instagram</i></span>}
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
