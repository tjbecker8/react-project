import React, {Component} from 'react';

import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class Openradar extends Component {
	//data
	state = {
	    dataRadar: {
	      labels: [this.props.document[0].name, this.props.document[1].name, this.props.document[2].name, this.props.document[3].name, this.props.document[4].name, this.props.document[5].name],
	      datasets: [
					{
						label: "Percentile",
						backgroundColor: "rgba(194, 116, 161, 0.5)",
						borderColor: "rgb(194, 116, 161)",
						data: [this.props.document[0].percentile, this.props.document[1].percentile, this.props.document[2].percentile, this.props.document[3].percentile, this.props.document[4].percentile, this.props.document[5].percentile,]
					},
	        {
	          label: "Score",
	          backgroundColor: "rgba(71, 225, 167, 0.5)",
	          borderColor: "rgb(71, 225, 167)",
	          data: [this.props.document[0].raw_score, this.props.document[1].raw_score, this.props.document[2].raw_score, this.props.document[3].raw_score, this.props.document[4].raw_score, this.props.document[5].raw_score,]
	        }
	      ]
	    }

	  }

	//functions

	componentWillMount() {

}

	//render
	render() {
		return (

			<MDBContainer>
				<h3 className="mt-5">Openness</h3>
        <Radar data={this.state.dataRadar} options={{ responsive: true }} />
      </MDBContainer>


		)
	}
}



export default Openradar;
