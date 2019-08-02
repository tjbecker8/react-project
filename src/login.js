import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Login extends Component {
	//data
	state = {
		email: '',
		password: '',
		error: ''
	}

	//functions

changeEmail = (e) => {
	this.setState({email: e.target.value})
}

changePassword = (e) => {
	this.setState({password: e.target.value})
}

login =(e) => {
	e.preventDefault()
	axios.post(`${process.env.REACT_APP_API}api/login`, this.state).then((res) => {

		if (!res.data.token) {
			this.setState({
				error: res.data
			})
		} else {
			this.setState({
				error: ''
			})
			localStorage.setItem('token', res.data.token)
			this.props.auth()
		}

		// let x = localStorage.getItem('token')
	}).catch((err)=> {
		console.log('err', err)
	})
}


	//render
	render() {
		return (
			<div id="form" className="row">
				<div className="col-sm-4 offset-4">
					<div className="card signup">
						<div className="card-header">
							<h3>Welcome Back to Moodylsis</h3>
							<h5>Login</h5>
						</div>
						<div className="card-body">
							<form onSubmit={(e)=> this.login(e)}>
								<div id="email-login" className="form-group">
									<input type="email" className="form-control" placeholder="email" value={this.state.email} onChange={(e) => this.changeEmail(e)}/>
								</div>
								<div id="pass-login" className="form-group">
									<input type="password" className="form-control" placeholder="password" value={this.state.password} onChange={(e) => this.changePassword(e)}/>
								</div>
								<div className="error">{this.state.error}</div>
								<button id="button" type="submit" className="btn btn-primary">Login</button>
							</form>
							<div className="card-footer">
								<span id="registration" className="input-group-btn">
	  							<Link to="/signup" >Need to register?</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}



export default Login;
