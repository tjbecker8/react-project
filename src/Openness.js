import React, {Component} from 'react';

import Openradar from './Openradar'

class Openness extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-4">
		<Openradar document={this.props.openness}/>
	</div>
		)
	}
}



export default Openness;
