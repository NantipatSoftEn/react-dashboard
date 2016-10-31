import React, { Component } from 'react';
import { render } from 'react-dom';

class LineChartAdvance extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			charts: [10, 50, 60]
		}
	}

	render () {
		return (
			<div className="col-lg-7 col-md-7">
				<div className="box box-solid bg-teal-gradient">
					<div className="box-header">
						<i className="fa fa-th"></i>
						<h3 className="box-title">Golf jQuery Graph</h3>
						<div className="box-tools pull-right">
							<button type="button"
								className="btn bg-teal btn-sm"
								data-widget="collapse">
								<i className="fa fa-minus"></i>
							</button>
							<button type="button"
								className="btn bg-teal btn-sm"
								data-widget="remove">
								<i className="fa fa-times"></i>
							</button>
						</div>
					</div>

					<div className="box-body border-radius-none">
						<div className="chart" id="line-chart" style={{height: '250px'}}>
						</div>
					</div>

					<div className="box-footer no-border">
						<div className="row">
							<div className="col-xs-4 text-center"
								style={{borderRight: '1px', solid: '#f4f4f4'}}>
								<input type="text"
								className="knob"
									readOnly
									data-readonly="true"
									value={this.state.charts[0]}
									data-width="60"
									data-height="60"
									data-fgColor="#39CCCC" />
								<div className="knob-label">Mail-Orders</div>
							</div>

							<div className="col-xs-4 text-center"
								style={{borderRight: '1px', solid: '#f4f4f4'}}>
								<input type="text"
									className="knob"
									readOnly
									data-readonly="true"
									value={this.state.charts[1]}
									data-width="60"
									data-height="60"
									data-fgColor="#39CCCC" />
								<div className="knob-label">Online</div>
							</div>

							<div className="col-xs-4 text-center">
								<input type="text"
									className="knob"
									readOnly
									data-readonly="true"
									value={this.state.charts[2]}
									data-width="60"
									data-height="60"
									data-fgColor="#39CCCC" />
								<div className="knob-label">In-Store</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount () {
		// Invokes knob
		// http://anthonyterrien.com/demo/knob/
		$(".knob").knob();

		// Invokes morris
		let line = new Morris.Line({
			element: 'line-chart',
			resize: true,
			data: [
				{y: '2011 Q1', item1: 2666},
				{y: '2011 Q2', item1: 2778},
				{y: '2011 Q3', item1: 4912},
				{y: '2011 Q4', item1: 3767},
				{y: '2012 Q1', item1: 6810},
				{y: '2012 Q2', item1: 5670},
				{y: '2012 Q3', item1: 4820},
				{y: '2012 Q4', item1: 15073},
				{y: '2013 Q1', item1: 10687},
				{y: '2013 Q2', item1: 8432}
			],
			xkey: 'y',
			ykeys: ['item1'],
			labels: ['Item 1'],
			lineColors: ['#efefef'],
			lineWidth: 2,
			hideHover: 'auto',
			gridTextColor: "#fff",
			gridStrokeWidth: 0.4,
			pointSize: 4,
			pointStrokeColors: ["#efefef"],
			gridLineColor: "#efefef",
			gridTextFamily: "Open Sans",
			gridTextSize: 10
		});
	}
}

export default LineChartAdvance;
