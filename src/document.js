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
						<h3>Analysis Information</h3>
					</div>
					<div id="doc-card-body" className="card-body">
						<h4>Name: {this.props.name}</h4>
						<h4>Word Count: {this.props.wordCount} words</h4>
						<h4>Created On: {this.props.createdOn}</h4>
					</div>
					<div className="card-footer" onClick={this.props.click}>
						Veiw Transcript
					</div>
				</div>
			</div>

		)
	}
}



export default Document;
