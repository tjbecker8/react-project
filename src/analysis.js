import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import "mdbreact/dist/css/mdb.css";
import Personresults from './personresults'
import Bottomnav from './bottomnav'
import Consumerneeds from './consumerneeds'
import Values from './values'
import Likley from './likley'
import Unlikley from './unlikley'
import Keywords from './keywords'
import Tones from './tones'


class Analysis extends Component {
//state
state = {
	consumption_preferences: [],
	date: '',
	document_tone: {},
	keywords: [],
	name: '',
	personality: [],
	transcription: '',
	values: [],
	word_count: 0,
}


//functions
componentWillMount() {
	console.log('test', this.props.location.aboutProps );
	this.setState({
		consumption_preferences: this.props.location.aboutProps.data.consumption_preferences
	})
	this.setState({
		date: this.props.location.aboutProps.data.date
	})
	this.setState({
		document_tone: this.props.location.aboutProps.data.document_tone
	})
	this.setState({
		keywords: this.props.location.aboutProps.data.keywords
	})
	this.setState({
		name: this.props.location.aboutProps.data.name
	})
	this.setState({
		personality: this.props.location.aboutProps.data.personality
	})
	this.setState({
		transcription: this.props.location.aboutProps.data.transcription
	})
	this.setState({
		values: this.props.location.aboutProps.data.values
	})
	this.setState({
		word_count: this.props.location.aboutProps.data.word_count
	})
}




//render

render() {
	// console.log(this.props.location.aboutProps.data);
  return (

<div id="wrap">
	<div className="row">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<h2>{this.state.name} Analysis</h2>
			</nav>
	</div>
	<div className="row">
		<Personresults personality={this.state.personality} />
		<Values values={this.state.values} />
		<Tones document={this.state.document_tone} />
	</div>
	<div className="row">


	</div>
	<div className="row">
		<Likley />
		<Unlikley />
		<Keywords keywords={this.state.keywords} />
		<Consumerneeds />
	</div>
	<Bottomnav />
</div>


  )
}
}

export default Analysis;
