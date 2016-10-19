import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class UserNavigation extends Component {
	render () {
		return (
			<div className="user-panel">
				<div className="pull-left image">
					<img src="public/images/golf.jpg" className="img-circle" alt="User Image" />
				</div>
				<div className="pull-left info">
					<p>Teerapong Singthong</p>
					<a href="#"><i className="fa fa-circle text-success"></i> Online</a>
				</div>
			</div>
		)
	}
}

export default UserNavigation;
