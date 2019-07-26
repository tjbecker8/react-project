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
			this.state.tones.push('Sadness')
		}
		if (a.tone_name === 'Anger') {
			this.state.tones.push('Angry')
		}
		if (a.tone_name === 'Analytical') {
			this.state.tones.push('Analytical')
		}
		if (a.tone_name === 'Fear') {
			this.state.tones.push('Fear')
		}
		if (a.tone_name === 'Joy') {
			this.state.tones.push('Joy')
		}
		if (a.tone_name === 'Confident') {
			this.state.tones.push('Confident')
		}
		if (a.tone_name === 'Tentative') {
			this.state.tones.push('Tenative')
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
								return <Tonesradar document={t}/>
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
