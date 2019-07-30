import React, {Component} from 'react';
import Consumerradar from './consumerradar'


class Document extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-4">
		<div className="card text-center">
			<div className="card-header">
    		Consumer Needs
  		</div>
			<div className="card-body">
				<Consumerradar />
			</div>
		</div>
	</div>
		)
	}
}



export default Document;
