import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios';

class Upload extends Component {
//this.state.
	state = {
	 selectedFile: null
	}
//functions

constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
  }

	onChangeHandler=event=>{
	this.setState({
		selectedFile: event.target.files[0],
		loaded: 0,
	})
	}

	onClickHandler = () => {
		const data = new FormData()
		data.append('file', this.state.selectedFile)
		axios.post(`${process.env.REACT_APP_API}/api/upload`, data, {
		// receive two    parameter endpoint url ,form data
		}).then(res => { // then print response status
			console.log(res.statusText)
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
						<input type="file" name="file" onChange={this.onChangeHandler}/>
					</div>
					<button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
				</div>
			</div>
		</div>


  )
}
}

export default Upload;
