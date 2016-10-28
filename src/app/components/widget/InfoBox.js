import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class InfoBox extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {

		}
	}

	static propTypes = {
		datas: PropTypes.array
	}

	render () {
		const infoBoxItem = (infoBox) => (
			<div className="col-md-3 col-sm-6 col-xs-12" key={infoBox.id}>
				<div className="info-box">
					<span className={infoBox.stylesheet}>
						<i className={infoBox.icon}></i>
					</span>
					<div className="info-box-content">
						<span className="info-box-text">{infoBox.label}</span>
						<span className="info-box-number">
							{infoBox.percent}<small>%</small>
						</span>
					</div>
				</div>
			</div>
		);

		return (
			<div>
				{
					this.props.datas.map( infoBox => infoBoxItem(infoBox) )
				}
			</div>
		)
	}
}

export default InfoBox;
