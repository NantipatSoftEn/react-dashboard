import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

// layout container
import App from './containers/layout/App';

// containers
import Home from './containers/pages/Home';
import Todo from './containers/pages/Todo';
import Product from './containers/pages/Product';
import EasyRedux from './containers/pages/EasyRedux';
import ReactLifeCycle from './containers/pages/ReactLifeCycle';

// Forced redirect to home component
export default (
	<Router history={browserHistory}>
		<Redirect from="/" to="/home" />
		<Route path='/' component={App}>
			<IndexRoute component={Home}
				title="Home | My Sandbox"
				subTitle="This is a react sandbox" />
			<Route path='home'
				component={Home}
				title="Home | My Sandbox"
				subTitle="This is a react sandbox" />
			<Route path='todo'
				component={Todo}
				title="Todo | Pull real-time data from database" />
			<Route path='product'
				component={Product}
				title="Product | Add product to cart" />
			<Route path='easy-redux'
				component={EasyRedux}
				title="Easy Redux | To learn easy redux from simple file" />
			<Route path='react-life-cycle'
				component={ReactLifeCycle}
				title="React Life Cycle | To learn about react life cycle" />
		</Route>
	</Router>
);
