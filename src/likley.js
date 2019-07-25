import React, {Component} from 'react';
import Likelist from './likelist'


class Likley extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-3">
		<div className="card text-center">
			<div className="card-header">
    		Likley to:
  		</div>
			<div className="card-body">
				<ul>
					{
						this.props.likley.map((k)=>{
							return <Likelist likley={k} key={k.consumption_preference_id} />
						})
					}
				</ul>
			</div>
		</div>
	</div>
		)
	}
}



export default Likley;
