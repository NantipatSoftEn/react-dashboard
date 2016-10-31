import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import BreadCrumb from './Navigations/BreadCrumb';

import { connect } from 'react-redux';
import { spreadBreadCrump, getBreadCrumb } from '../../actions/breadCrumbAction';

const mapStateToProps = (state) => {
	return {
		breadCrumbState: state.breadCrumbState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onGetBreadCrumb: () => {
			dispatch(getBreadCrumb());
		}
	}
}

class BodyWrapper extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			pathname: this.props.content.props.location.pathname
		}
	}

	static propTypes: {
		pageHeader: PropTypes.string.isRequired,
		pageDesc: PropTypes.string,
		content: PropTypes.string.isRequired
	}

	// receive context from App.js
	static contextTypes = {
		appProps: PropTypes.object.isRequired
	}

	render () {
		return (
			<div className="content-wrapper">
				<section className="content-header">
					<h1>
						{this.context.appProps.children.props.route.title}
						<small>{this.context.appProps.children.props.route.pageDesc}</small>
					</h1>

					<BreadCrumb activeComponent={this.context.appProps.location.pathname}>
					</BreadCrumb>

				</section>
				<section className="content">
					{this.props.content}
				</section>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyWrapper);
