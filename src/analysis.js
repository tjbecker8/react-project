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

viewTranscript = () => {
  var element = document.getElementById("transcript-top");
  element.classList.add("active");
}

removeClass = () => {
  var element = document.getElementById("transcript-top");
  element.classList.remove("active");
}



//render

render() {
	// console.log(this.props.location.aboutProps.data);
  return (

<div id="wrap">
	<div id="transcript-top" className="fixed-top">
		<div id="transcript-col" className="col-10">
			<div id="transcript-card" className="card text-center">
				<div className="card-header">
	    		Transcript:
	  		</div>
				<div id="transcript-body" className="card-body">
					<Transcript transcript={this.state.transcription}/>
				</div>
				<div className="card-footer transcript-title" onClick={this.removeClass}>
				close</div>
			</div>
		</div>
	</div>

		<nav id="nav-top-analysis" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<h2>{this.state.name} Analysis - </h2> <h2>{this.state.word_count} words - </h2>  <h2>{this.state.date} - </h2> <h2 className="transcript-title" onClick={this.viewTranscript}>Veiw Transcript</h2>
			</nav>

<div id="new-layout">
	<div className="row">
		<div className="col-8">
			<Tones document={this.state.document_tone} />
			<Personresults personality={this.state.personality} />
			<Values values={this.state.values} />
			<Keywords keywords={this.state.keywords} />
		</div>

		<div className="col-4">
			<Likley likley={this.state.likley} />
			<Unlikley unlikley={this.state.unlikley} />
		</div>

	</div>
</div>



	<div className="row">


	</div>
	<Bottomnav />
</div>


  )
}
}

export default Analysis;
