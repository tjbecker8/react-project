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

	//render
	render() {
		// console.log(this.state.values);
		return (

			<div className="card">
				<div className="card-header">
					Values
				</div>
				<div className="card-body">
					<ul>
						{
							this.state.values.map((t)=>{
								return <Valuesradar values={t} key={t.trait_id} />
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



export default Values;
