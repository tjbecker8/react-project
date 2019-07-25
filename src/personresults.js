import React, {Component} from 'react';
import Personradar from './personradar'


class Personresults extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-4">


				<Personradar personality={this.props.personality} />

		
	</div>
		)
	}
}



export default Personresults;
