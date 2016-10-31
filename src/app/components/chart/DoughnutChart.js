import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import Chart from 'chart.js';

import { guid } from '../../utils/string';

class Doughnut extends Component {
	constructor (props, context) {
		super(props, context);

		this.state = {
			chartId: `pieChart_${guid()}`
		}
	}

	static propTypes = {
		chartTitle: PropTypes.string,
		minimize: PropTypes.bool,
		close: PropTypes.bool
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

		return (
			<div className="col-lg-5 col-md-5 connectedSortable">
				<div className="box box-danger">
					<div className="box-header with-border">
						<h3 className="box-title">{this.props.chartTitle}</h3>

						<div className="box-tools pull-right">
							{this.props.minimize && minimizeButton}
							{this.props.close && closeButton}
						</div>
					</div>
					<div className="box-body">
						<canvas id={this.state.chartId} style={{height: '250px'}}>
						</canvas>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount () {
		// inspecting chart element
		let chartEle = document.getElementById(this.state.chartId).getContext("2d");

		// mocking data
		const data = {
			labels: [
				"Red",
				"Blue",
				"Yellow"
			],
			datasets: [
			{
			data: [300, 50, 100],
			backgroundColor: [
				"#FF6384",
				"#36A2EB",
				"#FFCE56"
			],
			hoverBackgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56"
				]
			}]
		}

		// chart options
		const options = {

		}

		// create new chart object
		let myChart = new Chart(chartEle, {
			type: 'doughnut',
			data: data,
			options: options
		});
	}
}

export default Doughnut;
