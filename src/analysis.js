import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './analysis.css';
import "mdbreact/dist/css/mdb.css";
import moment from 'moment'
import Personresults from './personresults'
import Bottomnav from './bottomnav'
// import Consumerneeds from './consumerneeds'
import Values from './values'
import Likley from './likley'
import Unlikley from './unlikley'
import Keywords from './keywords'
import Tones from './tones'
import Transcript from './transcript'


class Analysis extends Component {
//state
state = {
	consumption_preferences: [],
	likley: [],
	unlikley: [],
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
	// console.log('test', this.props.location.aboutProps );
let array = this.props.location.aboutProps.data.consumption_preferences
array.forEach((a) => {
		a.consumption_preferences.forEach((c)=>{
			if (c.score === 1) {
				this.state.likley.push(c)
			}
		})
	})

array.forEach((a) => {
				a.consumption_preferences.forEach((c)=>{
				if (c.score === 0) {
				this.state.unlikley.push(c)
				}
			})
		})



	this.setState({
		consumption_preferences: this.props.location.aboutProps.data.consumption_preferences
	})


	this.setState({
		date: moment(this.props.location.aboutProps.data.date).format('D MMM YY')
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
	console.log('<><>',this.state.likley[0].consumption_preference_id);

	// console.log(this.props.location.aboutProps.data);
  return (

<div id="wrap">

		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<h2>{this.state.name} Analysis - {this.state.word_count} words - {this.state.date} </h2>
			</nav>

<div id="first" className="row">

<Tones document={this.state.document_tone} />
<Personresults personality={this.state.personality} />
<Values values={this.state.values} />
<Keywords keywords={this.state.keywords} />
</div>


	<div className="row">

	</div>
	<div className="row">


	</div>
	<div className="row">
		<Likley likley={this.state.likley} />
		<Unlikley unlikley={this.state.unlikley} />
		<Transcript transcript={this.state.transcription}/>
	</div>
	<Bottomnav />
</div>


  )
}
}

export default Analysis;
