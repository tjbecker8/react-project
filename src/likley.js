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





		<div id="like-card" className="card text-center">
			<div className="card-header">
    		<h3>Likley to:</h3>
  		</div>
			<div className="card-body">
				<ul className="like-unlike">
					{
						this.state.data.map((k)=>{
							return <Likelist likley={k} key={k.consumption_preference_id} />
						})
					}
				</ul>
			</div>
		</div>


		)
	}
}



export default Likley;
