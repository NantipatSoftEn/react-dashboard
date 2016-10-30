import React, { Component } from 'react';
import { render } from 'react-dom';

import LineChartAdvance from '../../components/chart/LineChartAdvance';

class Chart extends Component {
	render () {
		return (
			<div className="row">
				<LineChartAdvance />
			</div>
		)
	}
}

export default Chart;
