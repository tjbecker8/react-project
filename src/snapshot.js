import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './snapshot.css';




class Snapshot extends Component {
	//data
	state = {
		calc: {}
	}
	//functions

	componentWillReceiveProps(props) {
		console.log('props', props.calc);
		this.setState({
			calc: props.calc,
			name: props.calc.author.name,
			size: props.calc.size,
		})
	}




	//render
	render() {
		return (
			<div className="col-8">
				<div id="snapshot" className="card">
					<div id="header" className="card-header">
						<h2 className="card-title">Welcome </h2>
					</div>
					<div id="snap-body" className="card-body">
						<h3 className="">You have completed {this.state.total_analysis} analysis</h3>
						<h4 className="">With {this.state.word_total} word analysised</h4>
						<h5>Your top used word is: {this.state.keywords_flat}</h5>
						<h5>Your top used tone is: {this.state.tone_most}</h5>
						<h5>Your top personality trait is: {this.state.personality_most}</h5>
						<h5>Your top influnces is:
							<ul>
								<li>{this.state.like_total}</li>
								<li>Un{this.state.unlike_total}</li>
							</ul>
						</h5>


					</div>
					<div className="card-footer ">
						<span id="new-analyis" className="btn btn-primary">
							<Link id="new-analysis-btn" to="/upload" >Start New Analysis</Link>
						</span>
					</div>
				</div>
			</div>
		)
	}
}



export default Snapshot;
