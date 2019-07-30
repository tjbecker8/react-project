import React, {Component} from 'react';
import './cards.css'
import ReactMinimalPieChart from 'react-minimal-pie-chart';


class Tonesradar extends Component {


	//functions

	componentWillMount() {

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
				/>
			</div>
			<div className="card-footer">
				Name
			</div>
			</div>
			</div>

		)
	}
}



export default Tonesradar;
