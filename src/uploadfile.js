import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios';
class Upload extends Component {
//state

	state = {
		text: '',
		file: null,
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
				alert('Analysis Complete')



		}).catch((err) => {
			console.log('err', err)
		})
	}



//render
	render() {
	    return (
				<div className="row">
				<div className="col-4">
					<div className="card">
						<div id="upload-file">
							<form onSubmit={(e) => {this.createNew(e, this.state.text, this.state.file); this.clearMessage()}} className="md-form" >
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
			)
		}
	}
export default Upload;
