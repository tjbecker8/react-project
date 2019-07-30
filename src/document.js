import React, {Component} from 'react';


class Document extends Component {
	//data

	//functions


	//render
	render() {
		return (


			<div className="col-4">
				<div id="document-card" className="card">
					<div className="card-header">
						Document Information
					</div>
					<div className="card-body">
						<h3>name: {this.props.name} words</h3>
						<h3>word count: {this.props.wordCount}</h3>
						<h3>created on: {this.props.date}</h3>
						<h4 className="transcript-title" onClick={this.props.click}>Veiw Transcript</h4>
					</div>
				</div>
			</div>

		)
	}
}



export default Document;
