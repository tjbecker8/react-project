import React, {Component} from 'react';
import {Link} from 'react-router-dom'



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
			<nav className="navbar fixed-bottom navbar-light bg-light">
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
