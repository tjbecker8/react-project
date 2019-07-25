import React, {Component} from 'react';
import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import {Link} from 'react-router-dom'




class Personradar extends Component {
	//data
	state = {
			dataRadar: {
				labels: [this.props.personality[0].name, this.props.personality[1].name, this.props.personality[2].name, this.props.personality[3].name, this.props.personality[4].name,],
				datasets: [
					{
						label: "Percentile",
						backgroundColor: "rgba(194, 116, 161, 0.5)",
						borderColor: "rgb(194, 116, 161)",
						data: [this.props.personality[0].percentile, this.props.personality[1].percentile9, this.props.personality[2].percentile, this.props.personality[3].percentile, this.props.personality[4].percentile,]
					},
					{
						label: "Raw Score",
						backgroundColor: "rgba(71, 225, 167, 0.5)",
						borderColor: "rgb(71, 225, 167)",
						data: [this.props.personality[0].raw_score, this.props.personality[1].raw_score, this.props.personality[2].raw_score, this.props.personality[3].raw_score, this.props.personality[4].raw_score,]
					}
				]
			}

		}


	//functions



	//render
	render() {
		return (

			<MDBContainer>
				<h3 className="mt-5">Personality - <Link to ={{
						pathname: '/app',
						aboutProps:{
							data: this.state.target,
						}
					}} >Indepth</Link></h3>
        <Radar data={this.state.dataRadar} options={{ responsive: true }} />
      </MDBContainer>

		)
	}
}



export default Personradar;
