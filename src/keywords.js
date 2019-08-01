import React, {Component} from 'react';
import Keylist from './keylist'
import './cards.css';

class Keywords extends Component {
	//data

	//functions
componentWillMount() {
	// console.log('keys',this.props.keywords);
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
				this.props.keywords.map((k)=>{
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
