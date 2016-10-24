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
			],
			golf: ''
		};

		// this.setActiveMenuItem(this.context.appProps.location.pathname);
	}

	// receive context from App.js
	static contextTypes = {
		appProps: PropTypes.object.isRequired
	}

	static propTypes = {
		test: PropTypes.string
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
			activeClass: this.state.activeClass,
			// activeMenu: this.context.appProps.location.pathname
		}
	}

	componentDidMount () {
		this.setActiveMenuItem(this.props.test);
		this.setState({golf: this.props.test});
	}

	componentWillReceiveProps (nextProps) {
		console.log('componentWillReceiveProps');
		console.log(nextProps);
		this.setState({golf: nextProps.test});
	}

	render () {
		// console.log('LeftSideBar');
		// console.log(this.props.test);
		console.log(this.state.golf);
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
							activeMenu={this.props.breadCrumbState.breadcrumb}>
						</SingleMenu>

						<HeaderMenu title="Dashboard"></HeaderMenu>
						<TreeViewMenu
							title="Categories"
							menus={this.state.menus}
							activeMenu={this.props.breadCrumbState.breadcrumb}>
						</TreeViewMenu>

						<HeaderMenu title="Management"></HeaderMenu>
						<SingleMenu
							title="Product"
							redirect="/product"
							activeMenu={this.props.breadCrumbState.breadcrumb}>
						</SingleMenu>

						<SingleMenu
							title="Todo"
							redirect="/todo"
							activeMenu={this.props.breadCrumbState.breadcrumb}>
						</SingleMenu>
					</ul>
				</section>
			</aside>
		)
	}
}

// export default LeftSideBar;
export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);

/*
	http://stackoverflow.com/questions/22461129/switch-class-on-tabs-with-react-js

	== ReactJS: Warning: setState(…): Cannot update during an existing state transition ==
	http://stackoverflow.com/questions/37387351/reactjs-warning-setstate-cannot-update-during-an-existing-state-transiti
*/
