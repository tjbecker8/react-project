import React, {Component} from 'react';
import './landing.css';
import {Link} from 'react-router-dom'


class Signup extends Component {
	//data
	state = {
		name: '',
		email: '',
		password: '',
	}

	//functions

	setTrial = (e) => {
		if (localStorage.getItem('trial')) {
			alert('sorry, you have already used your free trial, please sign up to continue')
		}
		else {
			localStorage.setItem('trial', 'you get one free trial')
			window.location = '/upload'
		}
	}







	//render
	render() {
		return (

			<div className="wrap">
			<div className="landing">
				<span id="login" className="input-group-btn">
					<Link to="/login" >Login</Link>
				</span>
				<span id="signup" className="input-group-btn">
					<Link to="/signup" >Sign Up</Link>
				</span>
				<span onClick={this.setTrial} id="new-analyis" className="btn btn-primary">
					Try it out
				</span>

			</div>

			</div>



		)
	}
}



export default Signup;
