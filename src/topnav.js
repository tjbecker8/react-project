import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './navbar.css';



class Topnav extends Component {
	//data

	//functions
	logout= (e) => {
			console.log('hello');
			localStorage.removeItem('token')
	 }

	//render
	render() {
		return (
			<nav id="navbar-top" className="navbar fixed-top navbar-light bg-light">
			<span className="input-group-btn">
				<Link to="/app" >Moodlysis</Link>
			</span>
			<span onClick={this.logout} className="input-group-btn">
				<Link to="/login" >Logout</Link>
			</span>
		</nav>
		)
	}
}



export default Topnav;
