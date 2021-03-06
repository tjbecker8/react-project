import React, {Component} from 'react';
import Valuesradar from './valuesradar1'
import './cards.css';


class Values extends Component {
	//data
state = {
	values:[]
}
	//functions
componentWillMount() {
	// console.log(this.props.values);
	let array = this.props.values
	array.forEach((a) =>{
		if (a.percentile > .3 && a.raw_score > .5) {
			this.state.values.push(a)
		}
	})
}

changeClass = () => {
  var element = document.getElementById("definition-values");
  element.classList.add("active");
}

removeClass = () => {
  var element = document.getElementById("definition-values");
  element.classList.remove("active");
}

	//render
	render() {
		// console.log(this.state.values);
		return (
			<div>

				<div id="definition-values" className="fixed-top">
					<div className="card text-center">
						<div className="card-header">
							<h3>Values Definition</h3>
						</div>
						<div className="card-body">
							<ul>
								<li className="like-li" >Self-transcendence: Show concern for the welfare and interests of others.</li>
								<li className="like-li" >Conservation: Emphasize self-restriction, order, and resistance to change.</li>
								<li className="like-li" >Hedonism: Seek pleasure and sensuous gratification for themselves.</li>
								<li className="like-li" >Self-enhancement: Seek personal success for themselves.</li>
								<li className="like-li" >Open to change: Emphasize independent action, thought, and feeling, as well as a readiness for new experiences.</li>
							</ul>
						</div>
						<div onClick={this.removeClass} className="card-footer">
							close
						</div>
					</div>
				</div>

			<div className="card text-center">
				<div className="card-header">
					<h3>Values</h3>
				</div>
				<div className="card-body">
				<Valuesradar values={this.props.values} />
				</div>
				<div onClick={this.changeClass} className="card-footer">
					Definitions
				</div>
			</div>
			</div>
		)
	}
}



export default Values;
