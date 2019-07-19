import React, {Component} from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';



class valuesradar extends Component {
	//data
state = {
	data: [{
		subject: 'Math', A: 120, B: 110, fullMark: 150,
	},
	{
		subject: 'Chinese', A: 98, B: 130, fullMark: 150,
	},
	{
		subject: 'English', A: 86, B: 130, fullMark: 150,
	},
	{
		subject: 'Geography', A: 99, B: 100, fullMark: 150,
	},
	{
		subject: 'Physics', A: 85, B: 90, fullMark: 150,
	},
	{
		subject: 'History', A: 65, B: 85, fullMark: 150,
	},]
}


	//functions

	// export default class Example extends PureComponent {
	//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';
	//render
	render() {
		return (

			<RadarChart cx={135} cy={100} outerRadius={75} width={270} height={250} data={this.state.data}>
				<PolarGrid />
				<PolarAngleAxis dataKey="subject" />
				<PolarRadiusAxis />
				<Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
			</RadarChart>

		)
	}
}



export default valuesradar;
