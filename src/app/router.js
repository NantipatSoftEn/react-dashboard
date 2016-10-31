import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

// layout container
import App from './containers/layout/App';

// containers
import Home from './containers/pages/Home';
import Product from './containers/pages/Product';
import ProductDetail from './containers/pages/ProductDetail';

import Chart from './containers/pages/Chart';

// Forced redirect to home component
export default (
	<Router history={browserHistory}>
		<Redirect from="/" to="/home" />
		<Route path='/' component={App}>
			<IndexRoute component={Home}
				title="Home | My Sandbox"
				pageDesc="This is a react sandbox" />
			<Route path='home'
				component={Home}
				title="Home | My Sandbox"
				pageDesc="Dashboard" />
			<Route path='product'
				component={Product}
				title="Product | Add product to cart" />
			<Route path='/product/detail/:productID'
				component={ProductDetail}
				title="Product Detail" />
			<Route path='dashboard/chart'
				component={Chart}
				title="Chart | Chart summary"
				pageDesc="Summary data" />
		</Route>
	</Router>
);
