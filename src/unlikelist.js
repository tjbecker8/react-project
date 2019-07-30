import React, {Component} from 'react';
import './cards.css';


class Unlikelist extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<li className="like-li">{this.props.unlikley.name.split(' ').slice(2).join(' ')}</li>
		)
	}
}



export default Unlikelist;
