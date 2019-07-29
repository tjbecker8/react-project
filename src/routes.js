import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Signup from './signup'
import App from './App'
import Login from './login'
import Analysis from './analysis1'
import Upload from './uploadfile'
import Indepth from './indepth'


class Routes extends Component {
	//data
state = {
	loggedIn: false
}
	//functions
checkAuth= () => {
	if (localStorage.getItem('token')) {
		return true
	} else {
		return false
	}
	// if (this.state.loggedIn) {
	// 	return true
	// } else {
	// 	return false
	// }
}

auth = () => {
	this.setState({
		loggedIn: true
	}, ()=>{
		window.location.href ='/app'
	})
}
	//render
	render() {
		return (
			<BrowserRouter>
				<Switch>
					{
						this.checkAuth() &&
					<Route path="/app" component={App} />
					}
					<Route path="/analysis/:id" component={Analysis} />
					<Route path="/indepth" component={Indepth} />
					<Route path="/upload" component={Upload} />
					<Route path="/signup" component={() => <Signup auth={this.auth} />} />
					<Route path="/" component={() => <Login auth={this.auth} />} />

				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes;
