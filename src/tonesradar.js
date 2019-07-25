import React, {Component} from 'react';

import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class Tonesradar extends Component {
	//data
	state = {
	    dataRadar: {
	      labels: [this.props.document.tones[0].tone_name,this.props.document.tones[1].tone_name,this.props.document.tones[2].tone_name],
	      datasets: [

	        {
	          label: "Score",
	          backgroundColor: "rgba(71, 225, 167, 0.5)",
	          borderColor: "rgb(71, 225, 167)",
	          data: [this.props.document.tones[0].score,this.props.document.tones[1].score,this.props.document.tones[2].tone_name]
	        }
	      ]
	    }

	  }

	//functions

	componentWillMount() {
		console.log('document', this.props.document.tones[0].tone_name);
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



export default Tonesradar;
