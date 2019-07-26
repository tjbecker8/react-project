import React, {Component} from 'react';



class Likelist extends Component {
	//data

	//functions


	//render
	render() {
		

		return (

		<li>{this.props.likley.name.split(' ').slice(2).join(' ')}</li>


		)
	}
}



export default Likelist;
