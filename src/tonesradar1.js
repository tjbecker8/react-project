import React, {Component} from 'react';
import './cards.css'
import ReactMinimalPieChart from 'react-minimal-pie-chart';


class Tonesradar extends Component {
//state
State = {

}


	//functions

	componentWillMount() {
		console.log(this.props.document);
}

	//render
	render() {

		return (

			<div className="col-4">
				<div className="card">
					<div className="card-body">
						<br></br>
			<ReactMinimalPieChart
				data={[{
					value: 82,
					color: '#E38627'
				}]}
				style={{height: '100px'}}
				totalValue={100}
				lineWidth={20}
				animate
				/>
			</div>
			<div className="card-footer">
				{this.props.document.name}
			</div>
			</div>
			</div>

		)
	}
}



export default Tonesradar;
