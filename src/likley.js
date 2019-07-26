import React, {Component} from 'react';
import Likelist from './likelist'
import _ from 'lodash'

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

	//render
	render() {
		return (
	<div className="col-6">
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
			<div className="card-footer">
				See all Influences
			</div>
		</div>
	</div>
		)
	}
}



export default Likley;
