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
	analysis: [],
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
		axios.get(`http://localhost:4000/full?_id=${this.props.match.params.id}`).then((res)=> {
			console.log(res.data[0]);
			this.setState({
				analysis: res.data[0]
			})
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

	}).catch((err) => {
		console.log('err', err);
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
console.log(this.state);
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
