import React, { Component } from 'react';
import { render } from 'react-dom';
import NavLink from './NavLink';

import Logo from './navigations/Logo';
import SideBarToggleMenus from './navigations/SideBarToggleMenus';

/**
 * Active class menu
 * https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links
 */

class Header extends Component {
	render () {
		return (
			<div>
				<header className="main-header">
					<Logo></Logo>
					<SideBarToggleMenus></SideBarToggleMenus>
				</header>
			</div>
		)
	}
}

export default Header;
