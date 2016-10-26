import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class BoxWidget extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {

		}
	}

	render () {
		return (
			<div className="col-lg-6 col-md-6 col-xs-12">
				<div className="box box-primary">
					<div className="box-header with-border">
						<h3 className="box-title">Recently Added Products</h3>

						<div className="box-tools pull-right">
							<button type="button"
								className="btn btn-box-tool"
								data-widget="collapse">
								<i className="fa fa-minus"></i>
							</button>

							<button type="button"
								className="btn btn-box-tool"
								data-widget="remove">
								<i className="fa fa-times"></i>
							</button>
						</div>
					</div>

					<div className="box-body">
						<ul className="products-list product-list-in-box">
							<li className="item">
								<div className="product-img">
									<img src="/public/images/default-50x50.gif" alt="Product Image" />
								</div>
								<div className="product-info">
									<a href="javascript:void(0)" className="product-title">Samsung TV
										<span className="label label-warning pull-right">$1800</span>
									</a>
									<span className="product-description">
										Samsung 49 Inch
									</span>
								</div>
							</li>
						</ul>
					</div>
					<div className="box-footer text-center">
						<a href="javascript:void(0)" className="uppercase">View All Products</a>
					</div>
				</div>
			</div>
		)
	}
}

export default BoxWidget;
