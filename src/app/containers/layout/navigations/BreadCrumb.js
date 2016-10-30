import React, { Component, PropType } from 'react';
import { render } from 'react-dom';

class BreadCrum extends Component {
	static propTypes: {
		activeComponent: PropType.string.isRequired
	}

	constructor (props) {
		super(props);
	}

	capitalize (str) {
		return str.substr(0, 2).toUpperCase() + str.substr(2);
	}

	cleanBreadCrumb (str) {
		const activeStr = str;
		return activeStr.replace(/\//g, " > ").substr(3);
	}

	render () {
		return (
			<ol className="breadcrumb">
				<li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
				<li className="active">{this.cleanBreadCrumb(this.props.activeComponent)}</li>
			</ol>
		)
	}
}

export default BreadCrum;
