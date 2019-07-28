import React, {Component} from 'react';
import Personradar from './personradar'

import './cards.css';


class Personresults extends Component {
	//data
state ={
	personality: []
}
	//functions
componentWillMount() {
	// console.log('person',this.props.personality);

	let array = this.props.personality
	array.forEach((a) =>{
		if (a.percentile > .5 && a.raw_score > .5) {
			this.state.personality.push(a)
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

		return (
			<div >

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
					Personality
				</div>
				<div className="card-body">
					<ul className="pers">
						{
							this.state.personality.map((t)=>{
								return <Personradar document={t} key={t.trait_id}/>
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



export default Personresults;
