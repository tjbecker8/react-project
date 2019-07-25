import React, {Component} from 'react';

import Openradar from './Openradar'

class Openness extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-4">
		<Openradar document={this.props.document}/>
	</div>
		)
	}
}



export default Openness;
