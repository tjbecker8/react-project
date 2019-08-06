import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './analysis.css';
import "mdbreact/dist/css/mdb.css";
import moment from 'moment'
import Personresults from './personresults'

// import Consumerneeds from './consumerneeds'
import Values from './values'
import Likley from './likley'
import Unlikley from './unlikley'
import Keywords from './keywords'
import Tones from './tones'
import Document from './document'
import Transcript from './transcript'
import axios from 'axios'
import Topnav from './topnav'


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
	this.setState({name: n, analysis: a, consumption_preferences: c, document_tone: dt, keywords: key, personality: per, transcription: tr, values: val, word_count: wc, date: da })
}

removeFile = () => {
	if (localStorage.getItem('trial')) {
		axios.delete(`${process.env.REACT_APP_API}/api/delete`, {
			params: {author: "5d42c96d62aebe3275ce391d"}
		})
	}
}


componentWillMount() {

	axios.get(`${process.env.REACT_APP_API}full/${this.props.match.params.id}`, {headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}).then((res)=> {
			// console.log(res.data);
		let array = res.data.consumption_preferences
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

			this.stateSet(res.data.name, res.data, res.data.consumption_preferences, res.data.document_tone.tones, res.data.keywords, res.data.personality, res.data.transcription, res.data.values, res.data.word_count, moment(res.data.date).format('D MMM YY'))
	})
this.removeFile()
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
// console.log(this.state.keywords);
// console.log(this.state);
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

				<Topnav />

		<div id="new-layout">
			<div id="main" className="row">
				<div className="col-8">

					<div id="tone-pers" className="row">
						<div className="col-12">
							<Tones document={this.state.document_tone} />
						</div>
					</div>
					<div id="tone-pers" className="row">
						<div className="col-10">
							<Personresults personality={this.state.personality} />
						</div>


					</div>




				</div>

				<div className="col-4">
					<div className="row">
					<Likley likley={this.state.likley} />
					</div>
					<div className="row">
					<Unlikley unlikley={this.state.unlikley} likley={this.state.likley} />
					</div>
				</div>
			</div>
			<div className="row">

				<div className="col-6">
					<Values values={this.state.values} />
				</div>

				<div id="key-col" className="col-3">
					<Keywords keywords={this.state.keywords} />
				</div>
				<div id="doc-col" className="col-3">
				<Document name={this.state.name} wordCount={this.state.word_count} createdOn={this.state.date} click={this.viewTranscript} />
				</div>
			</div>
		</div>
		</div>




  )
}
}

export default Analysis;
