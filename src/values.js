import React, {Component} from 'react';
import Valuesradar from './valuesradar1'
import './cards.css';


class Values extends Component {
	//data
state = {
	values:[]
}
	//functions
componentWillMount() {
	console.log(this.props.values);
}

	//render
	render() {
		return (
	<div className="col-4">
				<Valuesradar values={this.props.values} />
	</div>
		)
	}
}



export default Values;
