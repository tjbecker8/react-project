import React, {Component} from 'react';



class Unlikelist extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<li>{this.props.unlikley.name.split(' ').slice(2).join(' ')}</li>
		)
	}
}



export default Unlikelist;
