import React, { Component, PropTypes } from 'react';
import render from 'react-dom';

import NotificationWidget from '../../components/widget/NotificationWidget';

class Home extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			style: {
				product: {
					icon: 'ion-cube',
					stylesheet: 'small-box bg-aqua'
				},
				order: {
					icon: 'ion-clipboard',
					stylesheet: 'small-box bg-green'
				},
				backorder: {
					icon: 'ion-alert-circled',
					stylesheet: 'small-box bg-red'
				},
				crm: {
					icon: 'ion ion-person-add',
					stylesheet: 'small-box bg-yellow'
				}
			}
		}
	}

	render () {
		return (
			<div className="row">
				<NotificationWidget
					label="Product"
					count="9,999"
					link=""
					icon={this.state.style.product.icon}
					stylesheet={this.state.style.product.stylesheet}>
				</NotificationWidget>
				<NotificationWidget
					label="Orders"
					count="1,150"
					link=""
					icon={this.state.style.order.icon}
					stylesheet={this.state.style.order.stylesheet}>
				</NotificationWidget>
				<NotificationWidget
					label="Backorder"
					count="255"
					link=""
					icon={this.state.style.backorder.icon}
					stylesheet={this.state.style.backorder.stylesheet}>
				</NotificationWidget>
				<NotificationWidget
					label="Customer Relationship"
					count="99"
					link=""
					icon={this.state.style.crm.icon}
					stylesheet={this.state.style.crm.stylesheet}>
				</NotificationWidget>
			</div>
		)
	}
}

export default Home;
