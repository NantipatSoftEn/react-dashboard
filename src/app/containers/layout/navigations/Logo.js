import React, { Component } from 'react';
import { render } from 'react-dom';

class Logo extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<a href="/home" className="logo">
				<span className="logo-mini"><b>GOLF</b></span>
				<span className="logo-lg"><b>I'm</b> gOangle</span>
			</a>
		)
	}
}

export default Logo;
