import React, {Component} from 'react';
import Radarchart from './radar'


class Personality extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-3">
		<div className="card text-center">
			<div className="card-header">
    		Featured
  		</div>
			<div className="card-body">
				<Radarchart />
			</div>
		</div>
	</div>
		)
	}
}



export default Personality;
