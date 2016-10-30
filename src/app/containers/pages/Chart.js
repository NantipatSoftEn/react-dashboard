import React, { Component } from 'react';
import { render } from 'react-dom';

import LineChartAdvance from '../../components/chart/LineChartAdvance';
import PieChart from '../../components/chart/PieChart';

class Chart extends Component {
	render () {
		return (
			<div className="row">
				<LineChartAdvance />
				<PieChart />
			</div>
		)
	}
}

export default Chart;
