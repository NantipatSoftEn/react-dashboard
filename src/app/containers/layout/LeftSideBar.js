import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import UserNavigation from './LeftSideBar/UserNavigation';
import GlobalSearch from './LeftSideBar/GlobalSearch';
import HeaderMenu from './LeftSideBar/HeaderMenu';

import SingleMenu from './LeftSideBar/SingleMenu';

import TreeViewMenu from './LeftSideBar/TreeViewMenu';

class LeftSideBar extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			activeMenu: '/',
			activeClassTree: 'active treeview',
			activeClass: 'active',
			menus: [
				{
					id: 0,
					title: 'Easy Redux',
					activeMenu: "/easy-redux"
				} , {
					id: 1,
					title: 'React Life Cycle',
					activeMenu: '/react-life-cycle'
				}
			]
		};
	}

	// receive context from App.js
	static contextTypes = {
		appProps: PropTypes.object.isRequired
	}

	// By adding childContextTypes and getChildContext
	// React passes the information down automatically
	// and any component in the subtree
	setActiveMenuItem = (menu) => {
		this.setState({
			activeMenu: menu
		});

		console.log(
			"%csetActiveMenuItem",
			"color: yellow; font-style: italic; background-color: blue;padding: 2px"
		);
	}

	static childContextTypes = {
		setActiveMenuItem: PropTypes.func
	}

	getChildContext () {
		return {
			setActiveMenuItem: this.setActiveMenuItem
		}
	}

	// This life cycle called before render()
	componentWillMount () {
		this.setActiveMenuItem(this.context.appProps.location.pathname);
	}

	render () {
		return (
			<aside className="main-sidebar">
				<section className="sidebar">
					{/* TODO: Passing user infornation props */}
					<UserNavigation></UserNavigation>

					{/* TODO Dispatch action to search page */}
					<GlobalSearch></GlobalSearch>

					<ul className="sidebar-menu">
						<HeaderMenu title="Dashboard"></HeaderMenu>
						<TreeViewMenu
							title="Categories"
							menus={this.state.menus}>
						</TreeViewMenu>

						<HeaderMenu title="Management"></HeaderMenu>
						<SingleMenu
							title="Product"
							activeMenu="/product">
						</SingleMenu>

						<SingleMenu
							title="Todo"
							activeMenu="/todo">
						</SingleMenu>
					</ul>
				</section>
			</aside>
		)
	}
}

export default LeftSideBar;

/*
	http://stackoverflow.com/questions/22461129/switch-class-on-tabs-with-react-js

	== ReactJS: Warning: setState(…): Cannot update during an existing state transition ==
	http://stackoverflow.com/questions/37387351/reactjs-warning-setstate-cannot-update-during-an-existing-state-transiti
*/
