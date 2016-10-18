import React, { Component, PropType } from 'react';
import render from 'react-dom';
import { Link } from 'react-router';

class NavLink extends Component {
	static propTypes: {
		parentEle: PropType.string.isRequired
	}

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<Link {...this.props} activeClassName="active" />
		)
	}
}

export default NavLink;
