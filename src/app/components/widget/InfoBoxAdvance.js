import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class InfoBoxAdvance extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			percent: {
				width: `${this.props.percent}%`
			}
		}
	}

	static propTypes = {
		icon: PropTypes.string,
		stylesheet: PropTypes.string,
		label: PropTypes.string,
		number: PropTypes.string,
		percent: PropTypes.string,
		note: PropTypes.string
	}

	render () {
		return (
			<div className="col-md-6">
				<div className="info-box bg-yellow">
					<span className="info-box-icon">
						<i className="ion ion-ios-pricetag-outline"></i>
					</span>

					<div className="info-box-content">
						<span className="info-box-text">{this.props.label}</span>
						<span className="info-box-number">{this.props.numbers}</span>

						<div className="progress">
							<div className="progress-bar" style={this.state.percent}></div>
						</div>
						<span className="progress-description">
							{this.props.note}
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default InfoBoxAdvance;
