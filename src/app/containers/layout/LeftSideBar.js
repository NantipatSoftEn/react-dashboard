import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import NavLink from './NavLink';

class LeftSideBar extends Component {
	static contextTypes = {
		appProps: PropTypes.object.isRequired
	}

	// static propTypes: {
	// 	setActiveMenuItem: PropTypes.func.isRequired
	// }

	constructor (props, context) {
		super(props, context);
		this.state = {
			activeMenu: '/',
			activeClassTree: 'active treeview',
			activeClass: 'active'
		}
	}

	// onHandleActiveMenuItem (menu) {
	// 	this.setState({ activeMenu: this.props.setActiveMenuItem(menu) });
	// }

	// This life cycle called before render()
	componentWillMount () {
		this.setActiveMenuItem(this.context.appProps.location.pathname);
	}

	setActiveMenuItem = (menu) => {
		this.setState({activeMenu: menu});
	}

	render () {
		// let pathname = this.context.appProps.location.pathname;
		console.log(this.state.activeMenu);
		console.log(this.state.activeMenu == '/home');

		return (
			<aside className="main-sidebar">
				<section className="sidebar">
					<div className="user-panel">
						<div className="pull-left image">
							<img src="public/images/golf.jpg" className="img-circle" alt="User Image" />
						</div>
						<div className="pull-left info">
							<p>Teerapong Singthong</p>
							<a href="#"><i className="fa fa-circle text-success"></i> Online</a>
						</div>
					</div>

					<form action="#" method="get" className="sidebar-form">
						<div className="input-group">
							<input type="text" name="q" className="form-control" placeholder="Search..." />
							<span className="input-group-btn">
								<button type="submit" name="search" id="search-btn" className="btn btn-flat">
									<i className="fa fa-search"></i>
								</button>
							</span>
						</div>
					</form>

					<ul className="sidebar-menu">
						<li className="header">Dashboard</li>
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
										System
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

						<li className="header">Management</li>
						<li onClick={() => this.setActiveMenuItem('/product')}
							className={(this.state.activeMenu === '/product') ? 'active' : ''}>
							<NavLink to="/product">
								<i className="fa fa-link"></i>
								<span>Product</span>
							</NavLink>
						</li>
						<li className="">
							<NavLink to="/todo">
								<i className="fa fa-link"></i>
								<span>Todo</span>
							</NavLink>
						</li>
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
