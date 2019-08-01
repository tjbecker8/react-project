import React, {Component} from 'react';
import './cards.css';
import _ from 'lodash'

class Keylist extends Component {
	//data
state= {
	colors: ['#56aaa9', '#b9863a', '#c99594', '#686860', '#97ad6a', '#7d5899', '#895789', ],
	color: ''
}
	//functions
componentWillMount () {
	const pick = _.sample(this.state.colors)
		this.setState({
			color: pick
		})
}

	//render
	render() {

		return (

		<h5 style={{background: this.state.color}} id="keywords-li" className="keywords">{this.props.word}</h5>


		)
	}
}



export default Keylist;
