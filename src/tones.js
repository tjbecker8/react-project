import React, {Component} from 'react';
import './cards.css';
import Tonesradar from './tonesradar1'

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
		 return console.log('nope');
	 }
	 else {
		 // console.log('array', array);
	array.forEach((a) =>{
		if (a.tone_name === 'Sadness') {
			this.state.tones.push({name: 'Sadness',
			id: 1,
			score: {value: Math.round(a.score * 100), color: '#56aaa9'},
			color: '#56aaa9',
		})
		}
		if (a.tone_name === 'Anger') {
			this.state.tones.push({name: 'Angry',
			id: 2,
			score: {value: Math.round(a.score * 100), color: '#b9863a'},
			color: '#b9863a',
		})
		}
		if (a.tone_name === 'Analytical') {
			this.state.tones.push({name: 'Analytical',
			id: 3,
			score: {value: Math.round(a.score * 100), color: '#c99594'},
			color: '#c99594',
		})
		}
		if (a.tone_name === 'Fear') {
			this.state.tones.push({name: 'Fear',
			id: 4,
			score: {value: Math.round(a.score * 100), color: '#686860'},
			color: '#686860',
		})
		}
		if (a.tone_name === 'Joy') {
			this.state.tones.push({name: 'Joy',
			id: 5,
			score: {value: Math.round(a.score * 100), color: '#97ad6a'},
			color: '#97ad6a',
		})
		}
		if (a.tone_name === 'Confident') {
			this.state.tones.push({name: 'Confident',
			id: 6,
			score: {value: Math.round(a.score * 100), color: '#7d5899'},
			color: '#7d5899',
		})
		}
		if (a.tone_name === 'Tentative') {
			this.state.tones.push({name: 'Tenative',
				id: 7,
				score: {value: Math.round(a.score * 100), color: '#895789'},
				color: '#895789',
			})
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
							<li className="like-li" >Analytical: </li>
							<li className="like-li" >Anger: </li>
							<li className="like-li" >Confident: </li>
							<li className="like-li" >Fear: </li>
							<li className="like-li" >Tentative: </li>
							<li className="like-li" >Sadness: </li>
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
					<div className="row">
						{
							this.state.tones.map((t)=>{
								return <Tonesradar document={t} key={t.id} />
							})
						}

				</div>
				<div onClick={this.changeClass} className="card-footer">
					Definitions
				</div>
			</div>
		</div>
		</div>


		)
	}
}



export default Tones;
