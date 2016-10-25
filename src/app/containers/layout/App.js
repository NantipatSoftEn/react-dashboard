import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import LeftSideBar from './LeftSideBar';
import BodyWrapper from './BodyWrapper';
import Footer from './Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Redux
import { Provider } from 'react-redux';
import store from '../../store';

import '../../sass/styles.scss';

import { connect } from 'react-redux';
import { spreadBreadCrump } from '../../actions/breadCrumbAction';

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

class App extends Component {
	constructor (props, context) {
		super(props, context);

		this.state = {
			title: this.props.children.props.route.title,
			pageDesc: this.props.children.props.route.pageDesc
		}

		document.title = this.props.children.props.route.title;
	}

	static childContextTypes = {
		appProps: PropTypes.object.isRequired
	}

	getChildContext () {
		return {
			appProps: this.props
		}
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header />

					<LeftSideBar
						pathname={this.props.children.props.location.pathname} />

					<BodyWrapper
						content={this.props.children}
						pageHeader={this.state.title}
						pageDesc={this.state.pageDesc} />

					<Footer />
				</div>	
			</MuiThemeProvider>
		)
	}

	componentDidUpdate () {
		document.title = this.props.children.props.route.title;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
