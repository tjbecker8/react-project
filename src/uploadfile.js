import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import axios from 'axios';
class Upload extends Component {
//state

	state = {
		file: null
	}

//functions


	handleFile(e){
		let file = e.target.files[0]
		this.setState({file: file})
	}

	handleUpload(e){

		axios.post(`${process.env.REACT_APP_API}/api/upload`, this.state.file).then((res)=>{
			console.log('succes');
		}).catch((err)=> {
				console.log('err', err);
			})
	}





//render
	render() {
	    return (
				<div className="container">
					<div className="row">
						<div class="offset-md-3 col-md-6">
							<div class="form-group files">
								<label>Upload your file</label>
								<input type="file" name="file" onChange={(e)=>this.handleFile(e)} />
							</div>
							<button type="button" class="btn btn-success btn-block" onClick={(e)=>this.handleUpload(e)} >Upload</button>
						</div>
					</div>
				</div>
	    )
	  }
	}
export default Upload;
