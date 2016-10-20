import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import HeaderTreeViewMenu from './HeaderTreeViewMenu';
import SingleMenu from './SingleMenu';

class TreeViewMenu extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			menus: this.props.menus
		}
	}

	static propType = {
		title: PropTypes.title,
		menus: PropTypes.array
	}

	// receive context
	static contextTypes = {
		appProps: PropTypes.object.isRequired,	// App.js
		setActiveMenuItem: PropTypes.func
	};

	/*
		Check current route with array menu
		if match, it should toggle tree menu
	*/
	onActiveTreeMenu (currentRoute) {
		let match = [];
		this.state.menus.forEach(
			(menu) => {
				if (currentRoute === menu.activeMenu) {
					match.push(menu.activeMenu);
				}
			}
		);

		return (match.length > 0);
	}

	render () {
		const style = {
			show: {
				display: 'block'
			},
			hide: {
				display: 'none'
			}
		};

		let currentRoute = this.context.appProps.location.pathname;

		return (
			<li className="treeview">
				<HeaderTreeViewMenu title={this.props.title}>
				</HeaderTreeViewMenu>

				<ul className="treeview-menu" style={this.onActiveTreeMenu(currentRoute) ? style.show : style.hide}>
					{this.props.menus.map(
						(menu) => (
							<SingleMenu
								key={menu.id}
								title={menu.title}
								activeMenu={menu.activeMenu}>
							</SingleMenu>
						)
					)}
				</ul>
			</li>
		)
	}
}

export default TreeViewMenu;
