/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-04-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-05-2016
*/

import React, { Component } from 'react'
import { render } from 'react-dom'

class Footer extends Component {
	render () {
		return (
			<footer className="main-footer">
			<div className="pull-right hidden-xs">
				<a href="mailto:st.teerapong@gmail.com">@iamgoangle</a>
			</div>
				<strong>Copyright &copy; 2016 <a href="#">Yellow Duck dot I/O</a>.</strong>
			</footer>
		)
	}
}

export default Footer;
