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


class Indepth extends Component {
//state
state = {
 openness: []
}


//functions








//render

render() {
console.log('work',this.props.location.aboutProps.data[0].children);
  return (

<div id="wrap">
	<div className="row">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<h2>InDepth Personality Analysis</h2>
			</nav>
	</div>
	<div className="row">
		<Openness openness={this.props.location.aboutProps.data[0].children} />
		<Conscientiousness conscientiousness={this.props.location.aboutProps.data[1].children} />
		<Extraversion extraversion={this.props.location.aboutProps.data[2].children} />
	</div>
	<div className="row">
		<Agreeableness agreeableness={this.props.location.aboutProps.data[3].children} />
		<EmotionalRange emotionalRange={this.props.location.aboutProps.data[4].children} />

	</div>

	<Bottomnav />
</div>


  )
}
}

export default Indepth;
