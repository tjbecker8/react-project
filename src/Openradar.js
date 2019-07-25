import React, {Component} from 'react';

import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class Openradar extends Component {
	//data
	state = {
	    dataRadar: {
	      labels: [],
	      datasets: [
					{
						label: "Percentile",
						backgroundColor: "rgba(194, 116, 161, 0.5)",
						borderColor: "rgb(194, 116, 161)",
						data: []
					},
	        {
	          label: "Score",
	          backgroundColor: "rgba(71, 225, 167, 0.5)",
	          borderColor: "rgb(71, 225, 167)",
	          data: []
	        }
	      ]
	    }

	  }

	//functions

	componentWillMount() {
		console.log('document');
}

	//render
	render() {
		return (

			<MDBContainer>
				<h3 className="mt-5">Tone</h3>
        <Radar data={this.state.dataRadar} options={{ responsive: true }} />
      </MDBContainer>


		)
	}
}



export default Openradar;
