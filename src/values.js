import React, {Component} from 'react';
import Valuesradar from './valuesradar'


class Values extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-3">
		<div className="card text-center">
			<div className="card-header">
    		Values
  		</div>
			<div className="card-body">
				<Valuesradar />
			</div>
		</div>
	</div>
		)
	}
}



export default Values;
