import React, {Component} from 'react';
import Unlikelist from './unlikelist'
import _ from 'lodash'
import './cards.css';


class Unlikley extends Component {
	//data
state ={
	data: []
}
	//functions
componentWillMount() {
	const array = _.sampleSize(this.props.unlikley, 8)
	this.setState({
		data: array
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
<div className="row">

	<div id="definition" className="fixed-top">
		<div className="card">
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

	<div>
		<div id="unlike-card" className="card text-center">
			<div className="card-header">
    		Unlikley to:
  		</div>
			<div className="card-body">
				<ul>
					{

						this.state.data.map((k)=>{
							return <Unlikelist unlikley={k} key={k.consumption_preference_id} />
						})
					}
				</ul>
			</div>
			<div onClick={this.changeClass} className="card-footer">
				See all Influences
			</div>
		</div>
	</div>

</div>
		)
	}
}



export default Unlikley;
