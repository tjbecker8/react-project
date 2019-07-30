import React, {Component} from 'react';
import './cards.css'

class Tonesradar extends Component {


	//functions

	componentWillMount() {

}

	//render
	render() {

		return (


			<li className="tones" >{this.props.document}</li>



		)
	}
}



export default Tonesradar;
