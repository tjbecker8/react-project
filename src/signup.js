import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import {Link} from 'react-router-dom'


class Signup extends Component {
	//data
	state = {
		name: '',
		email: '',
		password: '',
	}

	//functions
changeName = (e) => {
	this.setState({name: e.target.value})
}

changeEmail = (e) => {
	this.setState({email: e.target.value})
}

changePassword = (e) => {
	this.setState({password: e.target.value})
}



signup =(e) => {
	e.preventDefault()
	axios.post(`${process.env.REACT_APP_API}api/signup`, this.state).then((res) => {
		console.log('res',res)
		localStorage.setItem('token', res.data.token)
		this.props.auth()
	}).catch((err)=> {
		console.log('err', err)
	})
}

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
			<div id="form" className="row">
				<div className="col-sm-4 offset-2">
					<div className="card signup">
						<div className="card-header">
							<h3>Welcome to Moodylsis</h3>
							<h5>Signup</h5>
						</div>
						<div className="card-body">

							<form onSubmit={(e)=> this.signup(e)}>
								<div id="signup-name" className="form-group">
									<input type="text" className="form-control" placeholder="name" value={this.state.name} onChange={(e)=> this.changeName(e)}/>
								</div>
								<div id="signup-email" className="form-group">
									<input type="email" className="form-control" placeholder="email" value={this.state.email} onChange={(e) => this.changeEmail(e)}/>
								</div>
								<div id="signup-pass" className="form-group">
									<input type="password" className="form-control" placeholder="password" value={this.state.password} onChange={(e) => this.changePassword(e)}/>
								</div>
								<button id="button" type="submit" className="btn btn-primary">Signup</button>
							</form>
							<div className="card-footer">
								<span id="registration" className="input-group-btn">
	  							<Link to="/login" >Already signed up? Login</Link>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="card">
						<div id="what-head" className="card-header">
							<h3>What is Moodylsis?</h3>
						</div>
						<div id="what-body" className="card-body">
							<h3>Moodylsis is an audio analyzer that measures the tone, personality, influnces, and values of a converstation.</h3>

						</div>

						<div className="card-footer">
							<span onClick={this.setTrial} id="new-analyis" className="btn btn-primary">
								Try it out
							</span>
						</div>

					</div>

				</div>


			</div>

		)
	}
}



export default Signup;
