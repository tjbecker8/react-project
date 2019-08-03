import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './upload.css';
import axios from 'axios';

import Topnav from './topnav'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

class Upload extends Component {
//state

	state = {
		text: '',
		file: null,
		data: null,
		id: '',
	}

//functions
changeText = (e) => {
	this.setState({
		text: e.target.value
	})
}

clearMessage = () => {
	this.setState({
		text: ''
	})
}

addFile = (e) => {
	this.setState({
		file: e.target.files[0]
	})
}

changeClass = () => {
  var element = document.getElementById("alert");
  element.classList.add("active");
}

removeClass = () => {
  var element = document.getElementById("alert");
  element.classList.remove("active");
}

changeFinish = () => {
  var element = document.getElementById("finish");
  element.classList.add("active");
}



time = (analysisid) => {
	var timer = setInterval( () => {
	axios.get(`${process.env.REACT_APP_API}full/${analysisid}`, {headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}).then((res)=> {
			if (res.data.name) {
				// console.log('hello')
				this.removeClass()
				this.setState({
					data: res.data,
					id: res.data._id
				})
				this.changeFinish()
				clearInterval(timer)
			}
		})}, 45000)
	}




checkForAnalysis = (analysisid) => {
	console.log('set timout working');
	console.log('id', analysisid);
	axios.get(`${process.env.REACT_APP_API}full/${analysisid}`, {headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}).then((res)=> {
			console.log('res', res.data);
			if (res.data.name) {
				// console.log('hello')
				this.removeClass()
				this.setState({
					data: res.data,
					id: res.data._id
				})
				this.changeFinish()
				console.log('what we need',this.state.data._id);
				console.log('other stuff', this.state.id);

			}
		})
}



createNew = (e, text, file) => {
	console.log('createNew');
		e.preventDefault()
		console.log('file', file);
		console.log('text', text);
		let file_holder = new FormData()
		file_holder.append('file', file)
		file_holder.append('name', text)
		console.log('testtest', file_holder);
		axios.post(`${process.env.REACT_APP_API}full`, file_holder, {headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}).then((res) => {
		this.time(res.data._id)
		}).catch((err) => {
			console.log('err', err)
		})
	}



//render
	render() {
	    return (
				<div>
					<Topnav />

					<div id="alert" className="card ">
						<div className="card-header">
							<h4>Please wait while your analysis is being completed.</h4>
						</div>
						<div id="wait-body" className="card-body">
							<FontAwesomeIcon className="spin" icon={faSync} />
						</div>
						<div id="wait-foot" className="card-footer">
							<h5>This may take several minutes</h5>
						</div>
					</div>

					<div id="finish" className="card ">
						<div className="card-header">
							<h4 id="h4-fin">Your analysis is complete!</h4>
						</div>
						<div id="fin-body" className="card-body">
							<FontAwesomeIcon icon={faCheckSquare} />

						</div>
						<div className="card-footer">
						<span id="see-analysis" >
						<Link to ={{
								pathname: `/analysis/${this.state.id}`,
								aboutProps:{
									id: this.state.id,
								}
							}} >See Analysis</Link>
							</span>
							</div>
					</div>

				<div id="upload-row" className="row">
					<div className="col-2"></div>
				<div className="col-4">
					<div className="card">



						<div className="card-header">
							<h3>Upload file</h3>
						</div>
						<div id="upload-file">
							<form onSubmit={(e) => {this.createNew(e, this.state.text, this.state.file); this.clearMessage(); this.changeClass()}} className="md-form" >
								<div className="file-field">
										<input id="file-input" type="file" name="file" onChange={this.addFile} required />
											</div>
											<input id="file-name" type="text" className="form-control" placeholder="Please name your analysis" value={this.state.text} onChange={(e) => this.changeText(e)} required />
											<button id="upload-button" type="submit" className="btn btn-success">Send</button>
									</form>
								</div>
							</div>
						</div>

						<div className="col-4">
							<div className="card">
								<div className="card-header">
									<h3>Notice!</h3>
								</div>
								<div id="notice-card-body" className="card-body">
									<h6>All audio files must be single/mono channel, 16 bit, 16000 hertz, and less than 60 minutes.</h6>
									<p>Use link below to convert your files first</p>
								</div>
								<div className="card-footer">
									<span id="convert-files">
										<a id="convert-link" href="https://audio.online-convert.com/convert-to-wav" target="_blank" rel="noopener noreferrer">Convert Files</a>
									</span>
							</div>
							</div>
						</div>
						<div className="col-4"></div>
					</div>

					</div>
			)
		}
	}
export default Upload;
