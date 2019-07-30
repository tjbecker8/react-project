import React, {Component} from 'react';
import './cards.css';


class Likelist extends Component {
	//data

	//functions


	//render
	render() {


		return (

		<li className="like-li">{this.props.likley.name.split(' ').slice(2).join(' ')}</li>


		)
	}
}



export default Likelist;
