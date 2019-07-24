import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './upload.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
class Upload extends Component {
//state

	state = {
		text: '',
		file: null,
		data: null,
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




// setRedirect = () => {
// 	this.setState((prevState) => ({
// 		redirect: !prevState.redirect
// 	}))
// }



createNew = (e, text, file) => {
		e.preventDefault()
		let file_holder = new FormData()
		file_holder.append('file', file)
		file_holder.append('name', text)
		axios.post(`${process.env.REACT_APP_API}/full`, file_holder).then((res) => {
			this.removeClass()
				alert('Analysis Complete')
				console.log('res',res.data);
				this.setState({
					data: res.data
				})
				console.log(this.state.data);
		}).catch((err) => {
			console.log('err', err)
		})
	}



//render
	render() {
	    return (
				<div>
					<div id="alert" className="card">
						<div className="card-body">
							<h4>Please wait while analysis is being completed.</h4>
						</div>
					</div>

					<div id="finish" className="card">
						<div className="card-body">
							<h4>your analysis is complete!</h4>
							<Link to ={{
									pathname: '/analysis',
									aboutProps:{
										data: this.state.data,
									}
								}} >See Analysis</Link>
						</div>
					</div>

				<div className="row">
				<div className="col-4">
					<div className="card">
						<div id="upload-file">
							<form onSubmit={(e) => {this.createNew(e, this.state.text, this.state.file); this.clearMessage(); this.changeClass()}} className="md-form" >
								<div className="file-field">
										<input type="file" name="file" onChange={this.addFile} required />
											</div>
											<input type="text" className="form-control" placeholder="File Name" value={this.state.text} onChange={(e) => this.changeText(e)} required />
											<button type="submit" className="btn btn-success">Send</button>
									</form>
								</div>
							</div>
						</div>

						<div className="col-4">
							<div className="card">
								<div className="card-body">
									<h6>All audio files must be single/mono channel, 16 bit, 16000 hertz.</h6>
									<p>Use linke below to convert your files first</p>
								</div>
								<div className="card-footer">
									<a href="https://audio.online-convert.com/convert-to-wav" target="_blank" rel="noopener noreferrer">Convert Files</a>
								</div>
							</div>
						</div>
					</div>
					</div>
			)
		}
	}
export default Upload;
