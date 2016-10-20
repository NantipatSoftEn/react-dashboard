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
	}

	static childContextTypes = {
		appProps: PropTypes.object.isRequired
	}

	getChildContext () {
		return {
			appProps: this.props
		}
	}

	componentDidUpdate () {
		// console.log(this.props.children.props.route.title);
	}

	render() {
		return (
			<div>
				<Header />

				<LeftSideBar>
				</LeftSideBar>

				<BodyWrapper
					content={this.props.children}
					pageHeader={this.state.title}
					pageDesc={this.state.subTitle}>
				</BodyWrapper>

				<Footer />
			</div>
		)
	}
}

export default App
