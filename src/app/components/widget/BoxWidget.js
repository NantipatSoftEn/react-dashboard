import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class BoxWidget extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {

		}
	}

	static propTypes = {
		title: PropTypes.string.isRequired,
		minimize: PropTypes.bool,
		close: PropTypes.bool,
		textLink: PropTypes.string,
		redirect: PropTypes.string,
		products: PropTypes.array
	}

	render () {
		const minimizeButton = (
			<button type="button"
				className="btn btn-box-tool"
				data-widget="collapse">
				<i className="fa fa-minus"></i>
			</button>
		);

		const closeButton = (
			<button type="button"
				className="btn btn-box-tool"
				data-widget="remove">
				<i className="fa fa-times"></i>
			</button>
		);

		{/* <!-- Awesome JSX feature that supports initialize --> */}
		const renderItem = (product) => (
			<li className="item" key={product.id}>
				<div className="product-img">
					<img src={product.thumbnail}
						alt={product.desc} />
				</div>
				<div className="product-info">
					<a href="javascript:void(0)" className="product-title">
						{product.title}
						<span className="label label-warning pull-right">
							{product.currency}{product.price}
						</span>
					</a>
					<span className="product-description">
						{product.desc}
					</span>
				</div>
			</li>
		);

		return (
			<div className="col-lg-6 col-md-6 col-xs-12">
				<div className="box box-primary">
					<div className="box-header with-border">
						<h3 className="box-title">
							{this.props.title}
						</h3>
						{/* <!-- /. End title --> */}

						<div className="box-tools pull-right">
							{this.props.minimize && minimizeButton}
							{this.props.close && closeButton}
						</div>
						{/* <!-- /. End button --> */}
					</div>

					<div className="box-body">
						<ul className="products-list product-list-in-box">
							{
								this.props.products.map( product => renderItem(product) )
							}
						</ul>
					</div>
					{ /* <!-- /. End render products --> */}

					<div className="box-footer text-center">
						<a href="javascript:void(0)" className="uppercase">
							{this.props.textLink}
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default BoxWidget;
