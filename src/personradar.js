import React, {Component} from 'react';

import { Polar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

import './cards.css';


class Personradar extends Component {
	//data
	state = {
    dataPolar: {
      datasets: [
        {
          data: [Math.round(this.props.person[0].percentile * 100), Math.round(this.props.person[1].percentile * 100), Math.round(this.props.person[2].percentile * 100), Math.round(this.props.person[3].percentile * 100), Math.round(this.props.person[4].percentile * 100)],
          backgroundColor: [
            "rgba(247, 70, 74, 0.75)",
            "rgba(70, 191, 189, 0.75)",
            "rgba(253, 180, 92, 0.75)",
            "rgba(148, 159, 177, 0.75)",
            "rgba(77, 83, 96, 0.75)"
          ],
          label: "My dataset" // for legend
        }
      ],
      labels: [this.props.person[0].name, this.props.person[1].name, this.props.person[2].name, this.props.person[3].name, this.props.person[4].name]
    }
  }




	//functions



	//render
	render() {

		return (

			<MDBContainer id="per-chart">
				<Polar data={this.state.dataPolar} options={{ responsive: true }} />
			</MDBContainer>

		)
	}
}



export default Personradar;
