import React, {Component} from 'react';
import Keylist from './keylist'


class Keywords extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-3">
		<div className="card text-center">
			<div className="card-header">
    		Keywords:
  		</div>
			<div className="card-body">
				<Keylist />
			</div>
		</div>
	</div>
		)
	}
}



export default Keywords;
