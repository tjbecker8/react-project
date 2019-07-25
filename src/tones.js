import React, {Component} from 'react';

import Tonesradar from './tonesradar'

class Tones extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-4">
		<Tonesradar document={this.props.document}/>
	</div>
		)
	}
}



export default Tones;
