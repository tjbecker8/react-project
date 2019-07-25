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
	<div className="col-3">
		<div className="card text-center">
			<div className="card-header">
    		Transcript:
  		</div>
			<div id="transcript" className="card-body">
				<p>{this.props.transcript}</p>
			</div>
		</div>
	</div>
		)
	}
}



export default Transcript;
