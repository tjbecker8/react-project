import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './navbar.css';

class Bottomnav extends Component {
	//data

	//functions
	logout= (e) => {
			console.log('hello');
			localStorage.removeItem('token')
	 }

	//render
	render() {
		return (
			<nav id="navbar-bottom" className="navbar fixed-bottom navbar-light bg-light">
			<span className="input-group-btn">
				<Link to="/app" >Home</Link>
			</span>
			<span onClick={this.logout} className="input-group-btn">
				<Link to="/login" >Logout</Link>
			</span>
		</nav>
		)
	}
}



export default Bottomnav;
