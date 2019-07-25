import React, {Component} from 'react';
import Valuesradar from './valuesradar1'


class Values extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-8">
		<div className="card text-center">
			<div className="card-header">
    		Values
  		</div>
			<div className="card-body">
				<Valuesradar values={this.props.values} />
			</div>
		</div>
	</div>
		)
	}
}



export default Values;
