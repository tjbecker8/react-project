import React, {Component} from 'react';
import moment from 'moment'


class Options extends Component {
	//data
state = {
	analysis: this.props.analysis
}
	//functions
	componentWillMount() {
			let analysis = this.state.analysis
			analysis.date = moment(analysis.date).format('D MMM YY')
			this.setState({analysis})
		}

	//render
	render() {
		return (
			<li onClick={()=> this.props.selectAnalysis(this.state.analysis._id)} className= {this.state.analysis.active ? 'active list-group-item d-flex justify-content-between align-items-center' : 'list-group-item d-flex justify-content-between align-items-center'}>
				{this.state.analysis.name}
				<span className="badge badge-primary badge-pill">{this.state.analysis.date}</span>
			</li>




		)
	}
}



export default Options;
