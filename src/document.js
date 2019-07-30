import React, {Component} from 'react';
import './cards.css';

class Document extends Component {
	//data

	//functions


	//render
	render() {
		return (


			<div>
				<div id="document-card" className="card">
					<div className="card-header">
						Document Information
					</div>
					<div className="card-body">
						<h6>name: {this.props.name} words</h6>
						<h6>word count: {this.props.wordCount}</h6>
						<h6>created on: {this.props.date}</h6>
						<h6 className="transcript-title" onClick={this.props.click}>Veiw Transcript</h6>
					</div>
				</div>
			</div>

		)
	}
}



export default Document;
