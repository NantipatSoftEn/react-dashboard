import React, { Component, PropType } from 'react';
import { render } from 'react-dom';

import BreadCrumb from './navigations/BreadCrumb';

class BodyWrapper extends Component {
	static propTypes: {
		pageHeader: PropType.string.isRequired,
		pageDesc: PropsType.string,
		content: PropType.string.isRequired
	}

	constructor (props) {
		super(props);
		this.state = {
			pathname: this.props.content.props.location.pathname
		}
	}

	componentWillMount () {
		this.setState({
			pathname: this.props.content.props.location.pathname
		});
	}

	render () {
		return (
			<div className="content-wrapper">
				<section className="content-header">
					<h1>
						{this.props.pageHeader}
						<small>{this.props.pageDesc}</small>
					</h1>

					<BreadCrumb activeComponent={this.state.pathname}>
					</BreadCrumb>

				</section>
				<section className="content">
					{this.props.content}
				</section>
			</div>
		)
	}
}

export default BodyWrapper;
