import React, {Component} from 'react';
import Unlikelist from './unlikelist'


class Unlikley extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-3">
		<div className="card text-center">
			<div className="card-header">
    		Unlikley to:
  		</div>
			<div className="card-body">
				<ul>
					{
						this.props.unlikley.map((k)=>{
							return <Unlikelist unlikley={k} key={k.consumption_preference_id} />
						})
					}
				</ul>
			</div>
		</div>
	</div>
		)
	}
}



export default Unlikley;
