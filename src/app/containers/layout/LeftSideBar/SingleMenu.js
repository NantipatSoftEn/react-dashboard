import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import NavLink from '../NavLink';

class SingleMenu extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			activeClass: 'active'
		}
	}

	static propType = {
		activeMenu: PropTypes.string.isRequired,
		currentLocation: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}

	// receive context
	static contextTypes = {
		appProps: PropTypes.object.isRequired,	// App.js
		setActiveMenuItem: PropTypes.func	// LeftSideBar.js
	}

	render () {
		/* TODO: Need to have refactor since it is over complicated ha ha */
		return (
			<li onClick={() => this.context.setActiveMenuItem(this.props.activeMenu)}
				className={(this.props.activeMenu === this.context.appProps.location.pathname) ? this.state.activeClass : ''}>
				<NavLink to={this.props.activeMenu}>
					<i className="fa fa-link"></i>
					<span>{this.props.title}</span>
				</NavLink>
			</li>
		)
	}
}

export default SingleMenu;
