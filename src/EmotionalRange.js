import React, {Component} from 'react';

import EmotionalRangeradar from './EmotionalRangeradar'

class EmotionalRange extends Component {
	//data

	//functions


	//render
	render() {
		return (
	<div className="col-4">
		<EmotionalRangeradar document={this.props.document}/>
	</div>
		)
	}
}



export default EmotionalRange;
