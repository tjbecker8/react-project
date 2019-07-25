import React, {Component} from 'react';
import Personradar from './personradar'


class Personresults extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-6">
		<div className="card text-center">
			<div className="card-header">
    		personality
  		</div>
			<div className="card-body">
				<Personradar personality={this.props.personality} />
			</div>
		</div>
	</div>
		)
	}
}



export default Personresults;
