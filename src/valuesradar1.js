import React, {Component} from 'react';




class valuesradar extends Component {
	//data


	//functions

	componentWillMount() {
		// console.log('rrrrr', this.props.values[0].raw_score);
}

	//render
	render() {
		return (

		<li className="values">-  {this.props.values.name}  -</li>


		)
	}
}



export default valuesradar;
