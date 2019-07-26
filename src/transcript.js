import React, {Component} from 'react';
import './cards.css';


class Transcript extends Component {
	//data

	//functions
componentWillMount() {
	// console.log('keys',this.props.keywords);
}

	//render
	render() {
		return (

				<p>{this.props.transcript}</p>
		
		)
	}
}



export default Transcript;
