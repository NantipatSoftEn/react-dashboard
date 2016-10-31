import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class HeaderTreeViewMenu extends Component {
	constructor (props) {
		super(props);
	}

	static propType = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	}

	render () {
		return (
			<a href="#">
				<i className={this.props.icon}></i>
				<span>{this.props.title}</span>
				<span className="pull-right-container">
					<i className="fa fa-angle-left pull-right"></i>
				</span>
			</a>
		)
	}
}

export default HeaderTreeViewMenu;
