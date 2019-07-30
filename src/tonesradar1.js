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


			<ReactMinimalPieChart
	  data={[{
	      value: 82,
	      color: '#E38627'
	    }]}
		style={{height: '100px'}}
	  totalValue={100}
	  lineWidth={20}
	  label
	  labelStyle={{
	    fontSize: '25px',
	    fontFamily: 'sans-serif'
	  }}
	  labelPosition={0}
	/>


		)
	}
}



export default Tonesradar;
