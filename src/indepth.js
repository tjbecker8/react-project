import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import "mdbreact/dist/css/mdb.css";


import Bottomnav from './bottomnav'
// import Consumerneeds from './consumerneeds'
import Openness from './Openness'
import Conscientiousness from './Conscientiousness'
import Extraversion from './Extraversion'
import Agreeableness from './Agreeableness'
import EmotionalRange from './EmotionalRange'


class Analysis extends Component {
//state
state = {

}


//functions
componentWillMount() {
	console.log('test', );
}







//render

render() {

  return (

<div id="wrap">
	<div className="row">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<h2>{this.state.name} Analysis - {this.state.word_count} words - {this.state.date} </h2>
			</nav>
	</div>
	<div className="row">
		<Openness  />
		<Conscientiousness />
		<Extraversion  />
	</div>
	<div className="row">
		<Agreeableness />
		<EmotionalRange />

	</div>

	<Bottomnav />
</div>


  )
}
}

export default Analysis;
