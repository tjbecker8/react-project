import React, {Component} from 'react';
import './cards.css';
import Tonesradar from './tonesradar'

class Tones extends Component {
	//data
	state = {
		tones: []
	}

	//functions
componentWillMount() {
	// console.log('tones', this.props.document.tones);
	let array = this.props.document
	 if (array === null) {
		 return console.log('fuck');
	 }
	 else {
	array.forEach((a) =>{
		if (a.tone_name === 'Sadness') {
			this.state.tones.push({name: 'Sadness',
			id: 1})
		}
		if (a.tone_name === 'Anger') {
			this.state.tones.push({name: 'Angry',
			id: 2})
		}
		if (a.tone_name === 'Analytical') {
			this.state.tones.push({name: 'Analytical',
			id: 3})
		}
		if (a.tone_name === 'Fear') {
			this.state.tones.push({name: 'Fear',
			id: 4})
		}
		if (a.tone_name === 'Joy') {
			this.state.tones.push({name: 'Joy',
			id: 5})
		}
		if (a.tone_name === 'Confident') {
			this.state.tones.push({name: 'Confident',
			id: 6})
		}
		if (a.tone_name === 'Tentative') {
			this.state.tones.push({name: 'Tenative', id: 7})
		}
	})
}
}

changeClass = () => {
  var element = document.getElementById("definition-tones");
  element.classList.add("active");
}

removeClass = () => {
  var element = document.getElementById("definition-tones");
  element.classList.remove("active");
}

	//render
	render() {
		return (
		<div >
			<div id="definition-tones" className="fixed-top">
				<div className="card text-center">
					<div className="card-header">
						Tones Definition
					</div>
					<div className="card-body">
						<ul>
							<li>Analytical: A person's reasoning and analytical attitude about things</li>
							<li>Anger: Evoked due to injustice, conflict, humiliation, negligence or betrayal. If anger is active, the individual attacks the target, verbally or physically. If anger is passive, the person silently sulks and feels tension and hostility.</li>
							<li>Confident: A person's degree of certainty</li>
							<li>Fear: A response to impending danger. It is a survival mechanism that is a reaction to some negative stimulus. It may be a mild caution or an extreme phobia.</li>
							<li>Tentative: A person's degree of inhibition</li>
						</ul>
					</div>
					<div onClick={this.removeClass} className="card-footer">
						close
					</div>
				</div>
			</div>

			<div className="card text-center">
				<div className="card-header">
					Tones
				</div>
				<div className="card-body">
					<ul className="tones">
						{
							this.state.tones.map((t)=>{
								return <Tonesradar document={t.name} key={t.id} />
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



export default Tones;
