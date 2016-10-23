import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import LeftSideBar from './LeftSideBar';
import BodyWrapper from './BodyWrapper';
import Footer from './Footer';

// Redux
import { Provider } from 'react-redux';
import store from '../../store';

import '../../sass/styles.scss';

class App extends Component {
	constructor (props, context) {
		super(props, context);

		this.state = {
			title: this.props.children.props.route.title,
			subTitle: this.props.children.props.route.subTitle
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
			<div>
				<Header />

				<LeftSideBar></LeftSideBar>

				<BodyWrapper
					content={this.props.children}
					pageHeader={this.state.title}
					pageDesc={this.state.subTitle}>
				</BodyWrapper>

				<Footer />
			</div>
		)
	}

	componentDidUpdate () {
		document.title = this.props.children.props.route.title;
	}
}

export default App
