import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import axios from 'axios';
class Upload extends Component {
//state

	state = {
		// text: '',
		file: null
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

createNew = (e, text, file) => {
		e.preventDefault()
		// console.log('file', file)
		let file_holder = new FormData()
		file_holder.append('file', file)
		// file_holder.append('name', text)
		// file_holder.append('channel', this.props.channel)
		console.log('file_holder', file_holder)
		let newAudio = {
			// name: text,
			file: file_holder,
			// channel: this.props.channel
		}
		console.log('newAudio', newAudio)
		axios.post(`${process.env.REACT_APP_API}/full`, file_holder).then((res) => {
				console.log('success');
		}).catch((err) => {
			console.log('err', err)
		})
	}



//render
	render() {
	    return (
				<div id="upload-file">
				<form onSubmit={(e) => {
						this.createNew(e, this.state.text, this.state.file); this.clearMessage()}
					}>
					<div className="input-group">
						<input type="file" name="file" onChange={this.addFile}/>
						<input type="text" className="form-control" placeholder="File Name" value={this.state.text} onChange={(e) => this.changeText(e)} />
						<div className="input-group-append">
							<button type="submit" className="btn btn-success">Send</button>
						</div>
					</div>
				</form>
			</div>
	    )
	  }
	}
export default Upload;
