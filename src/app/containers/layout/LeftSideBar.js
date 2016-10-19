import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import UserNavigation from './LeftSideBar/UserNavigation';
import GlobalSearch from './LeftSideBar/GlobalSearch';
import HeaderMenu from './LeftSideBar/HeaderMenu';

import SingleMenu from './LeftSideBar/SingleMenu';

class LeftSideBar extends Component {
	// broad cast context from App.js
	static contextTypes = {
		appProps: PropTypes.object.isRequired
	}

	constructor (props, context) {
		super(props, context);
		this.state = {
			activeMenu: '/',
			activeClassTree: 'active treeview',
			activeClass: 'active'
		}
	}

	// This life cycle called before render()
	componentWillMount () {
		this.setActiveMenuItem(this.context.appProps.location.pathname);
	}

	setActiveMenuItem = (menu) => {
		this.setState({activeMenu: menu});
	}

	render () {
		console.log(this.context.appProps.location.pathname);
		return (
			<aside className="main-sidebar">
				<section className="sidebar">
					{/* TODO: Passing user infornation props */}
					<UserNavigation></UserNavigation>

					{/* TODO Dispatch action to search page */}
					<GlobalSearch></GlobalSearch>

					<ul className="sidebar-menu">
						<HeaderMenu title="Dashboard"></HeaderMenu>
						{/*}
						<li className={(this.state.activeMenu === '/' || this.state.activeMenu === '/home') ? this.state.activeClass : ''}>
							<a href="#">
								<i className="fa fa-dashboard"></i> <span>Dashboard</span>
								<span className="pull-right-container">
								<i className="fa fa-angle-left pull-right"></i>
								</span>
							</a>

							<ul className="treeview-menu">
								<li onClick={() => this.setActiveMenuItem('/home')}
									className={(this.state.activeMenu === '/home') ? this.state.activeClass : ''}>
									<NavLink to="/home">
										<i className="fa fa-circle-o"></i>
										Home
									</NavLink>
								</li>
								<li>
									<a href="index2.html">
										<i className="fa fa-circle-o"></i>
										Live Streaming
									</a>
								</li>
							</ul>
						</li>
						{*/}

						<HeaderMenu title="Management"></HeaderMenu>
						<SingleMenu
							handleOnclick={() => this.setActiveMenuItem()}
							title="Product"
							activeMenu="/product"
							currentLocation={this.context.appProps.location.pathname}>
						</SingleMenu>
						<SingleMenu
							handleOnclick={() => this.setActiveMenuItem()}
							title="Todo"
							activeMenu="/todo"
							currentLocation={this.context.appProps.location.pathname}>
						</SingleMenu>



						<li className="treeview">
							<a href="#"><i className="fa fa-link"></i> <span>Multilevel</span>
							<span className="pull-right-container">
							<i className="fa fa-angle-left pull-right"></i>
							</span>
							</a>
							<ul className="treeview-menu">
								<li><a href="#">Link in level 2</a></li>
								<li><a href="#">Link in level 2</a></li>
							</ul>
						</li>
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
