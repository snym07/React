import React, { Component } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Chat from 'material-ui/svg-icons/communication/chat';

import NewFeeds from './new_feeds/NewFeeds';
import LeftPage from './left_page/LeftPage';
import RightPage from './right_page/RightPage';

export default class BodyContent extends Component {

	render() {

		const style = {
			position: 'fixed',
			right: '20px',
			bottom: '20px',
		}

		return (
			<div>
				<div className="left-page hidden-xs hidden-sm col-md-2">
					<LeftPage />
				</div>
				
				<div className="new-feeds col-xs-12 col-sm-7 col-md-6">
					<NewFeeds />
				</div>
				
				<div className="right-page hidden-xs col-sm-5 col-md-4">
					<RightPage />
				</div>

				<FloatingActionButton zDepth={5} style={style}>
		      <Chat />
		    </FloatingActionButton>
			</div>
		);
	}
}
