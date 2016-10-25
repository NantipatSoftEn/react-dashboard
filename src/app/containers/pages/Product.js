import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import Item from '../../components/product/Item'

class Product extends Component {
	constructor (props, context) {
		super(props, context);
	}

	render () {
		return (
			<div className="row">
				<Item productTitle="Lorem Ipsum" />
				<Item productTitle="Richard McClintock" />
				<Item productTitle="H. Rackham" />
				<Item productTitle="Letraset sheets containing" />
			</div>
		)
	}
}

export default Product
