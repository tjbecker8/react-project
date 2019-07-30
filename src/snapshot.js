import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './snapshot.css';
import _ from 'lodash'



class Snapshot extends Component {
	//data
	state = {
		analysis: [],
		keywords: [],
		tones: [],
		word_count: [],
		personality: [],
		consumption_preferences: [],
		word_total: null,
		total_analysis: null,
		keywords_flat: [],
		likley: [],
		unlikley: [],
		personality_total: [],
		unlike_total: [],
		like_total:[],
		person_total: [],
	}
	//functions
	componentWillReceiveProps(props) {

		this.setState({
			analysis: props.analysis
		})
		let size = _.size(props.analysis)
		this.setState({total_analysis: size})
		props.analysis.map((c) => {
			return this.state.keywords.push(c.keywords)
		})
		props.analysis.map((c) => {
			c.document_tone.tones.map((t)=>{
				return this.state.tones.push(t.tone_name)
			})
			return 'hello'
		})
		props.analysis.map((c) => {
			this.state.word_count.push(c.word_count)
			let add = _.sum(this.state.word_count)
			return this.setState({word_total: add})
			})

		props.analysis.map((c) => {
			return this.state.personality.push(c.personality)
		})
		props.analysis.map((c) => {
			return this.state.consumption_preferences.push(c.consumption_preferences)
		})
		let flat = _.flatten(this.state.keywords)
		this.setState({keywords_flat: flat})

		let array = props.analysis
			array.forEach((a) => {
					a.consumption_preferences.forEach((c)=>{
						c.consumption_preferences.forEach((s) => {
							if (s.score === 1) {
								this.state.likley.push(s.name)
							}
							let count = _.countBy(this.state.likley)
							this.setState({like_total: count})
						})
					})
				})

				array.forEach((a) => {
						a.consumption_preferences.forEach((c)=>{
							c.consumption_preferences.forEach((s) => {
								if (s.score === 0) {
									this.state.unlikley.push(s.name)
								}
								let count = _.countBy(this.state.unlikley)
								this.setState({unlike_total: count})
							})
						})
					})

					array.forEach((a) => {
							a.personality.forEach((c)=>{
								if (c.percentile > 0.5) {
									this.state.personality_total.push(c.name)
								}
								let count = _.countBy(this.state.personality_total)
								this.setState({person_total: count})
							})
						})

	}




	//render
	render() {
		console.log(this.state);
		return (
			<div className="col-8">
				<div id="snapshot" className="card">
					<div id="header" className="card-header">
						<h5 className="card-title">Welcome "user"</h5>
					</div>
					<div className="card-body">
						<h3 className="">You have completed {this.state.total_analysis} analysis</h3>
						<h4 className="">With {this.state.word_total} word analysised</h4>
						<h5>Your top used words are:</h5>
						<h5>Your top used tone is:</h5>
						<h5>Your top influnce is:</h5>
						<h5>Your top personality trait is:</h5>


					</div>
					<div className="card-footer ">
						<span id="new-analyis" className="btn btn-primary">
							<Link to="/upload" >New Analysis</Link>
						</span>
					</div>
				</div>
			</div>
		)
	}
}



export default Snapshot;
