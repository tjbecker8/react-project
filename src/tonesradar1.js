import React, {Component} from 'react';
import './cards.css'
import ReactMinimalPieChart from 'react-minimal-pie-chart';


class Tonesradar extends Component {
//state
state = {
	data: [{
		value: 45,
		color: '#e38627'
	}],
	chart: [],
}


	//functions

	componentWillMount () {
		// console.log('props', this.props.document);
		this.state.chart.push(this.props.document.score)

}

	//render
	render() {

		return (

			<div className="col-4">
				<div className="card">
					<div className="card-body">
						<br></br>
			<ReactMinimalPieChart
				data={this.state.chart}
				style={{height: '100px'}}
				totalValue={100}
				lineWidth={20}
				animate
				label
				labelStyle={{
					fontSize: '25px',
					fontFamily: 'sans-serif'
				}}
				labelPosition={0}
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
