import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class InfoBox extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {

		}
	}

	static propTypes = {
		icon: PropTypes.string,
		stylesheet: PropTypes.string,
		label: PropTypes.string,
		percent: PropTypes.string
	}

	render () {
		return (
			<div className="col-md-3 col-sm-6 col-xs-12">
				<div className="info-box">
					<span className={this.props.stylesheet}>
						<i className={this.props.icon}></i>
					</span>
					<div className="info-box-content">
						<span className="info-box-text">{this.props.label}</span>
						<span className="info-box-number">
							{this.props.percent}<small>%</small>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default InfoBox;
