import React, {Component} from 'react';
import Keylist from './keylist'
import './cards.css';

class Keywords extends Component {
	//data
state = {
	keywords: []
}
	//functions

	componentWillReceiveProps(props) {
	console.log('propies', props);
	this.setState({
		keywords: props.keywords
	})
}

	//render
	render() {
		return (
	<div>
		<div className="card text-center">
			<div className="card-header">
    		<h3>Keywords:</h3>
  		</div>
			<div className="card-body">
				<div className="keywords">
			{
				this.state.keywords.map((k)=>{
					return <Keylist word={k} />
				})
			}
		</div>
			</div>
		</div>
	</div>
		)
	}
}



export default Keywords;
