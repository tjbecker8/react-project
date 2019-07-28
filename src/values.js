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
  var element = document.getElementById("definition");
  element.classList.add("active");
}

removeClass = () => {
  var element = document.getElementById("definition");
  element.classList.remove("active");
}

	//render
	render() {
		// console.log(this.state.values);
		return (
			<div>

				<div id="definition" className="fixed-top">
					<div className="card text-center">
						<div className="card-header">
							personality Definition
						</div>
						<div className="card-body">
							<ul>
								<li>item</li>
								<li>item</li>
								<li>item</li>
								<li>item</li>
							</ul>
						</div>
						<div onClick={this.removeClass} className="card-footer">
							close
						</div>
					</div>
				</div>

			<div className="card text-center">
				<div className="card-header">
					Values
				</div>
				<div className="card-body">
					<ul className="values">
						{
							this.state.values.map((t)=>{
								return <Valuesradar values={t} key={t.trait_id} />
							})
						}
					</ul>
				</div>
				<div onClick={this.changeClass} className="card-footer">
					What does this Mean?
				</div>
			</div>
			</div>
		)
	}
}



export default Values;
