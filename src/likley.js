import React, {Component} from 'react';
import Likelist from './likelist'
import _ from 'lodash'
import './cards.css';

class Likley extends Component {
	//data
state = {
	data: []
}
	//functions
	componentWillMount() {
		const array = _.sampleSize(this.props.likley, 8)
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
		<div className="card text-center">
			<div className="card-header">
    		Likley to:
  		</div>
			<div className="card-body">
				<ul>
					{
						this.state.data.map((k)=>{
							return <Likelist likley={k} key={k.consumption_preference_id} />
						})
					}
				</ul>
			</div>
		</div>
	</div>
	</div>
		)
	}
}



export default Likley;
