import React, {Component} from 'react';

import Extraversionradar from './Extraversionradar'

class Extraversion extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-4">
		<Extraversionradar document={this.props.document}/>
	</div>
		)
	}
}



export default Extraversion;
