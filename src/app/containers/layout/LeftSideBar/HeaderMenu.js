import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class HeaderMenu extends Component {
	static propTypes: {
		title: PropType.string.isRequired
	}

	render () {
		return (
			<li className="header">{this.props.title}</li>
		)
	}
}

export default HeaderMenu;
