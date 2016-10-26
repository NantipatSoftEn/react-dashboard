import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import LeftSideBar from './LeftSideBar';
import BodyWrapper from './BodyWrapper';
import Footer from './Footer';

import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

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
			pageDesc: this.props.children.props.route.pageDesc,
			snackBar: {
				open: false,
				message: ''
			},
		}

		document.title = this.props.children.props.route.title;
	}

	snackBar () {
		return 'snack bar called';
	}

	/* Snackbar function */
	handleTouchTap = (message) => {
		this.setState({
			snackBar: {
				open: true,
				message: message
			},
		});
	};

	handleRequestClose = () => {
		this.setState({
			snackBar: {
				open: false
			},
		});
	};

	static childContextTypes = {
		appProps: PropTypes.object.isRequired,
		snackBar: PropTypes.func
	}

	getChildContext () {
		return {
			appProps: this.props,
			snackBar: this.handleTouchTap
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

					<Snackbar
						open={this.state.snackBar.open}
						message={this.state.snackBar.message}
						autoHideDuration={4000}
						onRequestClose={this.handleRequestClose}/>

				</div>
			</MuiThemeProvider>
		)
	}

	componentDidUpdate () {
		document.title = this.props.children.props.route.title;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
