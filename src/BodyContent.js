import React, { Component } from 'react';

import NewFeeds from './new_feeds/NewFeeds';
import LeftPage from './left_page/LeftPage';

export default class BodyContent extends Component {
	render() {
		return (
			<div>
				<div className="left-page hidden-xs col-sm-2">
					<LeftPage />
				</div>
				
				<div className="new-feeds col-xs-12 col-sm-6">
					<NewFeeds />
				</div>
				
				<div className="right-page hidden-xs col-sm-4"></div>
			</div>
		);
	}
}
