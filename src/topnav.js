import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


class Topnav extends Component {
	//data

	//functions
	logout= (e) => {
			console.log('hello');
			localStorage.removeItem('token')
			window.location = '/login'
	 }

	//render
	render() {
		return (
			<nav id="navbar-top" className="navbar fixed-top navbar-light bg-light">
			<span className="input-group-btn">
				<Link id="home-topnav" to="/app" >Moodlysis</Link>
			</span>
			<span id="logout" onClick={this.logout} >
				<FontAwesomeIcon icon={faSignOutAlt} />
				Signout
			</span>
		</nav>
		)
	}
}



export default Topnav;
