import React, {Component} from 'react';
import Personradar from './personradar'
import {Link} from 'react-router-dom'


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

	//render
	render() {

		return (
			<div className="card">
				<div className="card-header">
					Personality - veiw in depth
				</div>
				<div className="card-body">
					<ul>
						{
							this.state.personality.map((t)=>{
								return <Personradar document={t} id={t.trait_id}/>
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



export default Personresults;
