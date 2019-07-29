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

		let array = this.state.analysis
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

	}




	//render
	render() {
		console.log(this.state);
		return (
			<div className="col-8">
				<div id="snapshot" className="card">
					<div id="header" className="card-header">
						<h5 className="card-title">Snapshot</h5>
					</div>
					<div className="card-body">
						<h5 className="card-title">Special title treatment</h5>
						<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
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
