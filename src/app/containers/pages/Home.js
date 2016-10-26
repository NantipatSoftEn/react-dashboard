import React, { Component, PropTypes } from 'react';
import render from 'react-dom';

import NotificationWidget from '../../components/widget/NotificationWidget';
import BoxWidget from '../../components/widget/BoxWidget';
import InfoBox from '../../components/widget/InfoBox';
import InfoBoxAdvance from '../../components/widget/InfoBoxAdvance';

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
			<div>
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

				<div className="row">
					<BoxWidget></BoxWidget>

					<InfoBox
						icon="ion ion-ios-gear-outline"
						stylesheet="info-box-icon bg-aqua"
						label="Database Usage"
						percent="15">
					</InfoBox>

					<InfoBox
						icon="ion ion-ios-pricetag-outline"
						stylesheet="info-box-icon bg-yellow"
						label="Warehouse Usage"
						percent="44">
					</InfoBox>

					<InfoBox
						icon="ion ion-ios-heart-outline"
						stylesheet="info-box-icon bg-green"
						label="User feedback"
						percent="90">
					</InfoBox>

					<InfoBox
						icon="ion ion-ios-cloud-download-outline"
						stylesheet="info-box-icon bg-red"
						label="CPU Usage"
						percent="98">
					</InfoBox>

					<InfoBoxAdvance
						icon="ion ion-ios-cloud-download-outline"
						stylesheet="info-box-icon bg-red"
						label="CPU Usage"
						number="5,000"
						percent="50"
						note="50% Increase in 30 Days">
					</InfoBoxAdvance>
				</div>
			</div>
		)
	}
}

export default Home;
