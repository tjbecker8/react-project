import React, {Component} from 'react';

import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class valuesradar extends Component {
	//data
	state = {
	    dataRadar: {
	      labels: [this.props.values[0].name, this.props.values[1].name, this.props.values[2].name, this.props.values[3].name, this.props.values[4].name],
	      datasets: [
	        {
	          label: "Percentile",
	          backgroundColor: "rgba(194, 116, 161, 0.5)",
	          borderColor: "rgb(194, 116, 161)",
	          data: [this.props.values[0].percentile, this.props.values[1].percentile, this.props.values[2].percentile, this.props.values[3].percentile, this.props.values[4].percentile,]
	        },
	        {
	          label: "Raw Score",
	          backgroundColor: "rgba(71, 225, 167, 0.5)",
	          borderColor: "rgb(71, 225, 167)",
	          data: [this.props.values[0].raw_score, this.props.values[1].raw_score, this.props.values[2].raw_score, this.props.values[3].raw_score, this.props.values[4].raw_score,]
	        }
	      ]
	    }

	  }

	//functions

	componentWillMount() {
		console.log('rrrrr', this.props.values[0].raw_score);
}

	//render
	render() {
		return (

			<MDBContainer>
				<h3 className="mt-5">Values</h3>
        <Radar data={this.state.dataRadar} options={{ responsive: true }} />
      </MDBContainer>


		)
	}
}



export default valuesradar;
