import React, {Component} from 'react';

import { Polar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class valuesradar extends Component {
	//data
	state = {
		dataPolar: {
			datasets: [
				{
					data: [this.props.values[0].percentile * 100, this.props.values[1].percentile * 100, this.props.values[2].percentile * 100, this.props.values[3].percentile * 100, this.props.values[4].percentile * 100],
					backgroundColor: [
						"rgba(247, 70, 74, 0.5)",
						"rgba(70, 191, 189, 0.5)",
						"rgba(253, 180, 92, 0.5)",
						"rgba(148, 159, 177, 0.5)",
						"rgba(77, 83, 96, 0.5)"
					],
					label: "My dataset" // for legend
				}
			],
			labels: [this.props.values[0].name, this.props.values[1].name, this.props.values[2].name, this.props.values[3].name, this.props.values[4].name]
		}
	}

	//functions

	componentWillMount() {
		// console.log('rrrrr', this.props.values[0].raw_score);
}

	//render
	render() {
		return (

			<MDBContainer id="per-chart">
				<Polar data={this.state.dataPolar} options={{ responsive: true }} />
			</MDBContainer>


		)
	}
}



export default valuesradar;
