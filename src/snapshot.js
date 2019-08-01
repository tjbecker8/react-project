import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './snapshot.css';




class Snapshot extends Component {
	//data
	state = {
		calc: {},
		name: '',
		size: 0,
		keyword: '',
		mostLike: '',
		mostPersonality: '',
		mostUnlike: '',
		tone: '',
		wordTotal: 0,
	}
	//functions

	componentWillReceiveProps(props) {
		console.log('props', props.calc);
		this.setState({
			calc: props.calc,
			// name: props.calc.author.name,
			// size: props.calc.size,
			// keyword: props.calc.keyword,
			// mostLike: props.calc.mostLike,
			// mostPersonality: props.calc.mostPersonality,
			// mostUnlike: props.calc.mostUnlike,
			// tone: props.calc.tone,
			// wordTotal: props.calc.wordTotal

		})
	}




	//render
	render() {
		return (
			<div className="col-8">
				<div id="snapshot" className="card">
					<div id="header" className="card-header">
						<h2 className="card-title">Welcome {this.state.name} </h2>
					</div>
					<div id="snap-body" className="card-body">
						<h3 className="">You have completed {this.state.size} analysis</h3>
						<h4 className="">With {this.state.wordTotal} word analysised</h4>
						<h5>Your top used word is: {this.state.keyword}</h5>
						<h5>Your top used tone is: {this.state.tone}</h5>
						<h5>Your top personality trait is: {this.state.mostPersonality}</h5>
						<h5>Your top influnces are:
							<ul>
								<li>{this.state.mostLike}</li>
								<li>Un{this.state.mostUnlike}</li>
							</ul>
						</h5>


					</div>
					<div id="snap-foot" className="card-footer ">
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
