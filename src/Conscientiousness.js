import React, {Component} from 'react';

import Conscientiousnessradar from './Conscientiousnessradar'

class Conscientiousness extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-4">
		<Conscientiousnessradar document={this.props.conscientiousness}/>
	</div>
		)
	}
}



export default Conscientiousness;
