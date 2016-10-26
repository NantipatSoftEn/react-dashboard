import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';


class ProductDetail extends Component {
	static contextTypes = {
		snackBar: PropTypes.func
	}

	constructor (props, context) {
		super(props, context);

		this.state = {
			productId: 0
		}
	}

	render () {
		return (
			<div>
				<div className="row">
					<div className="col-lg-6 col-xs-6">
						<div className="box box-primary">
							<div className="box-header">
								Update my productId: {this.state.productId}
							</div>
							<div className="container-fluid">
								<img
									className="productThumbnail"
									src="/public/images/products/coffee.png" />
							</div>
							<div className="box-footer">
								xxx
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-xs-6">
						blar blar
					</div>
				</div>
			</div>
		)
	}

	componentDidMount () {
		this.setState({
			productId: this.props.params.productId
		});

		// calling snackbar
		this.context.snackBar('Product data has been loaded.');
	}
}

export default ProductDetail;
