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
		menus: PropTypes.array,
		activeMenu: PropTypes.string
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
	onActiveTreeMenu (currentRoute = this.props.activeMenu) {
		let match = [];
		this.state.menus.forEach(
			(menu) => {
				if (currentRoute === menu.redirect) {
					match.push(menu.redirect);
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

		let currentRoute = this.props.activeMenu;

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
								redirect={menu.redirect}
								activeMenu={currentRoute}>
							</SingleMenu>
						)
					)}
				</ul>
			</li>
		)
	}
}

export default TreeViewMenu;
