import React, { Component } from 'react';
import { render } from 'react-dom';

import LineChartAdvance from '../../components/chart/LineChartAdvance';
import PieChart from '../../components/chart/PieChart';
import DoughnutChart from '../../components/chart/DoughnutChart';

class Chart extends Component {
	render () {
		return (
			<div className="row">
				<LineChartAdvance />

				<PieChart
				chartTitle="Pie Chart"
				minimize={true}
				close={true} />

				<DoughnutChart
				chartTitle="Doughnut Chart"
				minimize={true}
				close={true} />
			</div>
		)
	}
}

export default Chart;
