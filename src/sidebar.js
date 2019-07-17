import React, {Component} from 'react';



class Sidebar extends Component {
	//data

	//functions


	//render
	render() {
		return (
			<div className="col-4">
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Special title treatment</h5>
				<div className="form-group">
				    <label for="exampleFormControlSelect2">Example multiple select</label>
				    <select multiple className="form-control" id="exampleFormControlSelect2">
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				    </select>
				  </div>
				<a className="btn btn-primary">View all</a>
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
