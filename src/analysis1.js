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
import axios from 'axios'


class Analysis extends Component {
//state
state = {
	analysis: null,
	consumption_preferences: [],
	likley: [],
	unlikley: [],
	date: '',
	document_tone: null,
	keywords: [],
	name: '',
	personality: [],
	transcription: '',
	values: [],
	word_count: 0,
}


//functions

stateSet = (n, a, c, dt, key, per, tr, val, wc, da ) => {
	this.setState({name: n, analysis: a, consumption_preferences: c, document_tone: dt, keywords: key, personality: per, transcription: tr, values: val, word_count: wc, date: da }, ()=>{console.log('state',this.state);})
}




componentWillMount() {

	axios.get(`http://localhost:4000/full?_id=${this.props.match.params.id}`).then((res)=> {

		let array = res.data[0].consumption_preferences
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

			this.stateSet(res.data[0].name, res.data[0], res.data[0].consumption_preferences, res.data[0].document_tone.tones, res.data[0].keywords, res.data[0].personality, res.data[0].transcription, res.data[0].values, res.data[0].word_count, moment(res.data[0].date).format('D MMM YY'))

			console.log(this.state.date);

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
	if(!this.state.word_count > 0){
           // Just wait for the memory to be available
           return null;
        }

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
					<h2>Moodylsis</h2>
					</nav>

		<div id="new-layout">
			<div id="main" className="row">
				<div className="col-8">

					<div id="tone-pers" className="row">
						<div className="col-6">
							<Tones document={this.state.document_tone} />
						</div>
						<div className="col-6">
							<Personresults personality={this.state.personality} />
						</div>


					</div>
					<div className="row">
						<div className="col-6">
							<Values values={this.state.values} />
						</div>
						<div className="col-6">
							<Keywords keywords={this.state.keywords} />
						</div>
					</div>

					<div className="row">
						<div id="document-card" class="card">
							<div class="card-header">
								Document Information
							</div>
							<div class="card-body">
								<h3>name: {this.state.name} - word count: {this.state.word_count} - created on: {this.state.date} words</h3> <h4 className="transcript-title" onClick={this.viewTranscript}>Veiw Transcript</h4>
							</div>
						</div>

					</div>

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