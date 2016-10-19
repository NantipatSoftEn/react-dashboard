import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import NavLink from '../NavLink';

class SingleMenu extends Component {
	static propType = {
		handleOnclick: PropTypes.func,
		activeMenu: PropTypes.string.isRequired,
		currentLocation: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}

	constructor (props, context) {
		super(props, context);
		this.state = {
			activeClass: 'active'
		}
	}

	render () {
		return (
			<li onClick={() => this.props.handleOnclick(this.props.activeMenu)}
				className={(this.props.activeMenu === this.props.currentLocation) ? this.state.activeClass : ''}>
				<NavLink to={this.props.activeMenu}>
					<i className="fa fa-link"></i>
					<span>{this.props.title}</span>
				</NavLink>
			</li>
		)
	}
}

export default SingleMenu;
