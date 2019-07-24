import React, {Component} from 'react';
import Options from './options'
import axios from 'axios'

class Sidebar extends Component {
	//data
state = {
	analysis: []
}
	//functions
	componentWillMount() {
			axios.get('http://localhost:4000/full').then((res)=> {
				console.log(res.data);
				this.setState({
					analysis: res.data
				})
			}).catch((err)=> {
				console.log('err', err);
			})
		}

	//render
	render() {
		return (
			<div className="col-4">
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Previous Analysis</h5>
				<div className="form-group">

				    <select multiple className="form-control" id="exampleFormControlSelect2">
							{
						this.state.analysis.map((a)=> {
							return <Options analysis={a} key={a._id} />
						})
					}
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
