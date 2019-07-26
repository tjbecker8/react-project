import React, {Component} from 'react';


class Tonesradar extends Component {


	//functions

	componentWillMount() {

}

	//render
	render() {
		console.log('tones',this.props.document);
		return (

			<li>{this.props.document}</li>



		)
	}
}



export default Tonesradar;
