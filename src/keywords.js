import React, {Component} from 'react';
import Keylist from './keylist'


class Keywords extends Component {
	//data

	//functions
componentWillMount() {
	console.log('keys',this.props.keywords);
}

	//render
	render() {
		return (
	<div className="col-3">
		<div className="card text-center">
			<div className="card-header">
    		Keywords:
  		</div>
			<div className="card-body">
				<ul>
			{
				this.props.keywords.map((k)=>{
					return <Keylist word={k} />
				})
			}
			</ul>
			</div>
		</div>
	</div>
		)
	}
}



export default Keywords;
