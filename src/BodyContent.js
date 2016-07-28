import React, { Component } from 'react';

import NewFeeds from './new_feeds/NewFeeds';

export default class BodyContent extends Component {
	render() {
		return (
			<div className="row">
				<div className="left-page hidden-xs col-sm-2"></div>
				
				<div className="new-feeds col-xs-12 col-sm-6">
					<NewFeeds />
				</div>
				
				<div className="right-page hidden-xs col-sm-4"></div>
			</div>
		);
	}
}
