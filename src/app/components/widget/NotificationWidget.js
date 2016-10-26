import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class NotificationWidget extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			linkLabel: 'More info'
		}
	}

	static propTypes = {
		count: PropTypes.string,
		label: PropTypes.string,
		stylesheet: PropTypes.string,
		icon: PropTypes.string,
		redirect: PropTypes.string
	}

	render () {
		return (
			<div className="col-lg-3 col-xs-6">
				<div className={this.props.stylesheet}>
					<div className="inner">
						<h3>{this.props.count}</h3>
						<p>{this.props.label}</p>
					</div>
					<div className="icon">
						<i className={this.props.icon}></i>
					</div>
					<a href={this.props.redirect} className="small-box-footer">
						{this.state.linkLabel} <i className="fa fa-arrow-circle-right"></i>
					</a>
				</div>
			</div>
		)
	}
}

export default NotificationWidget;
