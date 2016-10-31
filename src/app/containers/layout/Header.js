import React, { Component } from 'react';
import { render } from 'react-dom';
import NavLink from './NavLink';

import Logo from './Navigations/Logo';
import SideBarToggleMenus from './Navigations/SideBarToggleMenus';

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
