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
		tone_most: [],
		word_count: [],
		personality: [],
		consumption_preferences: [],
		word_total: null,
		total_analysis: null,
		keywords_flat: [],
		likley: [],
		unlikley: [],
		personality_total: [],
		personality_most: [],
		unlike_total: [],
		like_total:[],
		person_total: [],
	}
	//functions
findMostKeywords = (array) => {
	var arr1=array;
	var mf = 1;
	var m = 0;
	var item;
	for (var i=0; i<arr1.length; i++)
	{
		for (var j=i; j<arr1.length; j++)
		{
			if (arr1[i] === arr1[j])
			m++;
			if (mf<m)
			{
				mf=m;
				item = arr1[i];
			}
		}
		m=0;
	}
	this.setState({keywords_flat: item})
}

findMostTones = (array) => {
	var arr1=array;
	var mf = 1;
	var m = 0;
	var item;
	for (var i=0; i<arr1.length; i++)
	{
		for (var j=i; j<arr1.length; j++)
		{
			if (arr1[i] === arr1[j])
			m++;
			if (mf<m)
			{
				mf=m;
				item = arr1[i];
			}
		}
		m=0;
	}
	this.setState({tone_most: item})
}

findMostpersonality = (array) => {
	var arr1=array;
	var mf = 1;
	var m = 0;
	var item;
	for (var i=0; i<arr1.length; i++)
	{
		for (var j=i; j<arr1.length; j++)
		{
			if (arr1[i] === arr1[j])
			m++;
			if (mf<m)
			{
				mf=m;
				item = arr1[i];
			}
		}
		m=0;
	}
	this.setState({personality_most: item})
}

findMostLike = (array) => {
	var arr1=array;
	var mf = 1;
	var m = 0;
	var item;
	for (var i=0; i<arr1.length; i++)
	{
		for (var j=i; j<arr1.length; j++)
		{
			if (arr1[i] === arr1[j])
			m++;
			if (mf<m)
			{
				mf=m;
				item = arr1[i];
			}
		}
		m=0;
	}
	this.setState({like_total: item})
}

findMostUnlike = (array) => {
	var arr1=array;
	var mf = 1;
	var m = 0;
	var item;
	for (var i=0; i<arr1.length; i++)
	{
		for (var j=i; j<arr1.length; j++)
		{
			if (arr1[i] === arr1[j])
			m++;
			if (mf<m)
			{
				mf=m;
				item = arr1[i];
			}
		}
		m=0;
	}
	this.setState({unlike_total: item})
}




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
		let tones = this.state.tones
		this.findMostTones(tones)




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
		this.findMostKeywords(flat)


		let array = props.analysis
			array.forEach((a) => {
					a.consumption_preferences.forEach((c)=>{
						c.consumption_preferences.forEach((s) => {
							if (s.score === 1) {
								this.state.likley.push(s.name)
							}
							this.findMostLike(this.state.likley)
						})
					})
				})

				array.forEach((a) => {
						a.consumption_preferences.forEach((c)=>{
							c.consumption_preferences.forEach((s) => {
								if (s.score === 0) {
									this.state.unlikley.push(s.name)
								}
								this.findMostUnlike(this.state.unlikley)
							})
						})
					})

					array.forEach((a) => {
							a.personality.forEach((c)=>{
								if (c.percentile > 0.5) {
									this.state.personality_total.push(c.name)
								}
							})
						})
						this.findMostpersonality(this.state.personality_total)

	}




	//render
	render() {
		console.log(this.state);
		return (
			<div className="col-8">
				<div id="snapshot" className="card">
					<div id="header" className="card-header">
						<h2 className="card-title">Welcome "user"</h2>
					</div>
					<div id="snap-body" className="card-body">
						<h3 className="">You have completed {this.state.total_analysis} analysis</h3>
						<h4 className="">With {this.state.word_total} word analysised</h4>
						<h5>Your top used word is: {this.state.keywords_flat}</h5>
						<h5>Your top used tone is: {this.state.tone_most}</h5>
						<h5>Your top personality trait is: {this.state.personality_most}</h5>
						<h5>Your top influnces is:
							<ul>
								<li>{this.state.like_total}</li>
								<li>Un{this.state.unlike_total}</li>
							</ul>
						</h5>


					</div>
					<div className="card-footer ">
						<span id="new-analyis" className="btn btn-primary">
							<Link id="new-analysis-btn" to="/upload" >Start New Analysis</Link>
						</span>
					</div>
				</div>
			</div>
		)
	}
}



export default Snapshot;
