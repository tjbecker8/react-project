import React, {Component} from 'react';
import Personradar from './personradar'


class Personresults extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-3">
		<div className="card text-center">
			<div className="card-header">
    		personality
  		</div>
			<div className="card-body">
				<Personradar />
			</div>
		</div>
	</div>
		)
	}
}



export default Personresults;
