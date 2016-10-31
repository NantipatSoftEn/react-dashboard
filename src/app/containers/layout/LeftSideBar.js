import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import UserNavigation from './LeftSideBar/UserNavigation';
import GlobalSearch from './LeftSideBar/GlobalSearch';
import HeaderMenu from './LeftSideBar/HeaderMenu';

import SingleMenu from './LeftSideBar/SingleMenu';

import TreeViewMenu from './LeftSideBar/TreeViewMenu';

import { connect } from 'react-redux';
import { spreadBreadCrump } from '../../actions/breadCrumbAction';

/*
	component will subscribe to Redux store updates.
	Any time it updates, mapStateToProps will be called.
	Its result must be a plain object*,
	and it will be merged into the component’s props

	state in this case is store state, not a component state
*/
const mapStateToProps = (state) => {
	return {
		breadCrumbState: state.breadCrumbState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSpreadBreadCrumb: (menu) => {
			dispatch(spreadBreadCrump(menu));
		}
	}
}

class LeftSideBar extends Component {
	// receive context from App.js
	static contextTypes = {
		appProps: PropTypes.object.isRequired
	}

	static propTypes = {
		pathname: PropTypes.string
	}

	constructor (props, context) {
		super(props, context);
		this.state = {
			activeMenu: '/',
			activeClassTree: 'active treeview',
			activeClass: 'active',
			productMenus: [
				{
					id: 0,
					title: 'All product',
					redirect: "/product"
				} , {
					id: 1,
					title: 'Add new product',
					redirect: '/react-life-cycle'
				}
			],
			pathname: this.props.pathname
		};
	}

	// By adding childContextTypes and getChildContext
	// React passes the information down automatically
	// and any component in the subtree
	setActiveMenuItem = (menu) => {
		this.props.onSpreadBreadCrumb(menu);
	}

	static childContextTypes = {
		setActiveMenuItem: PropTypes.func,
		activeClass: PropTypes.string,
		activeMenu: PropTypes.string
	}

	getChildContext () {
		return {
			setActiveMenuItem: this.setActiveMenuItem,
			activeClass: this.state.activeClass
		}
	}

	componentWillReceiveProps (nextProps) {
		this.setState({pathname: nextProps.pathname});
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
						<SingleMenu
							title="Home"
							redirect="/home"
							activeMenu={this.state.pathname}>
						</SingleMenu>

						<HeaderMenu title="Dashboard"></HeaderMenu>
						<SingleMenu
							title="Chart"
							redirect="/dashboard/chart"
							activeMenu={this.state.pathname}
							icon="fa fa-pie-chart">
						</SingleMenu>

						<HeaderMenu title="Management"></HeaderMenu>
						<TreeViewMenu
							title="Product"
							icon=""
							menus={this.state.productMenus}
							activeMenu={this.state.pathname}>
						</TreeViewMenu>

						<SingleMenu
							title="User"
							redirect="/todo"
							activeMenu={this.state.pathname}>
						</SingleMenu>

						<HeaderMenu title="Configuration"></HeaderMenu>
						<SingleMenu
							title="Web Appearance"
							redirect="/todo"
							activeMenu={this.state.pathname}>
						</SingleMenu>

						<SingleMenu
							title="Database"
							redirect="/todo"
							activeMenu={this.state.pathname}>
						</SingleMenu>

						<SingleMenu
							title="Server"
							redirect="/todo"
							activeMenu={this.state.pathname}>
						</SingleMenu>

						<HeaderMenu title="Landing Page"></HeaderMenu>
						<SingleMenu
							title="Back to landing page"
							redirect="/todo"
							activeMenu={this.state.pathname}>
						</SingleMenu>
					</ul>
				</section>
			</aside>
		)
	}

	componentDidMount () {
		this.setActiveMenuItem(this.props.pathname);
		this.setState({pathname: this.props.pathname});
	}
}

// export default LeftSideBar;
export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);

/*
	http://stackoverflow.com/questions/22461129/switch-class-on-tabs-with-react-js

	== ReactJS: Warning: setState(…): Cannot update during an existing state transition ==
	http://stackoverflow.com/questions/37387351/reactjs-warning-setstate-cannot-update-during-an-existing-state-transiti
*/
