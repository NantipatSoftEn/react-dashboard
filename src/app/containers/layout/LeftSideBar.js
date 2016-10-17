import React, { Component } from 'react';
import { render } from 'react-dom';

import NavLink from './NavLink';

class LeftSideBar extends Component {
	constructor (props) {
		super(props);
		console.log(this.props);
	}

	render () {
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
						<li className="header">Inventory</li>
						<li className="">
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
