import React, { Component } from 'react';
import render from 'react-dom';
import { Link } from 'react-router';

class NavLink extends Component {
	constructor (props) {
		super(props);
		console.log(this.props);
	}

	render () {
		return (
			<Link {...this.props} activeClassName="active" />
		)
	}

	componentDidMount () {
		// Add active class to parent
		const parentEle = document.querySelectorAll('a.active')[0]
		parentEle.parentElement.className="active";
	}
}

export default NavLink;
