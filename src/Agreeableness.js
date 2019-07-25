import React, {Component} from 'react';

import Agreeablenessradar from './Agreeablenessradar'

class Agreeableness extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-4">
		<Agreeablenessradar document={this.props.document}/>
	</div>
		)
	}
}



export default Agreeableness;
