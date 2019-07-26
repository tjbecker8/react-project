import React, {Component} from 'react';

import Tonesradar from './tonesradar'

class Tones extends Component {
	//data
	state = {
		tones: []
	}

	//functions
componentWillMount() {
	// console.log('tones', this.props.document.tones);
	let array = this.props.document.tones
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

	//render
	render() {
		return (

			<div className="card">
				<div className="card-header">
					Tones
				</div>
				<div className="card-body">
					<ul>
						{
							this.state.tones.map((t)=>{
								return <Tonesradar document={t.name} key={t.id} />
							})
						}
					</ul>
				</div>
				<div className="card-footer">
					What does this Mean?
				</div>
			</div>


		)
	}
}



export default Tones;
