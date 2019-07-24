import React, {Component} from 'react';
import Options from './options'


class Sidebar extends Component {
	//data

	//functions


	//render
	render() {
		return (
			<div className="col-4">
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Analysis</h5>
				<div className="form-group">
				    <label for="exampleFormControlSelect2">Select a previous analysis to veiw</label>
				    <select multiple className="form-control" id="exampleFormControlSelect2">
				      <Options />
				    </select>
				  </div>
				<button className="btn btn-primary">View analysis</button>
			</div>
			<div className="card-footer text-muted">
				<form className="form-inline">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
	  	</div>
		</div>
	</div>
		)
	}
}



export default Sidebar;
