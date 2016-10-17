import React, { Component } from 'react';
import { render } from 'react-dom';

import NavTopBarCustomMenus from './NavTopBarCustomMenus';

class SideBarToggleMenus extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<nav className="navbar navbar-static-top" role="navigation">
				<a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
					<span className="sr-only">Toggle navigation</span>
				</a>

				<NavTopBarCustomMenus></NavTopBarCustomMenus>
			</nav>
		)
	}
}

export default SideBarToggleMenus;
