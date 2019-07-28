import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './snapshot.css';



class Snapshot extends Component {
	//data

	//functions


	//render
	render() {
		return (
			<div className="col-8">
				<div id="snapshot" className="card">
					<div id="header" className="card-header">
						<h5 className="card-title">Snapshot</h5>
					</div>
					<div className="card-body">
						<h5 className="card-title">Special title treatment</h5>
						<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
					</div>
					<div className="card-footer ">
						<span id="new-analyis" className="btn btn-primary">
							<Link to="/upload" >New Analysis</Link>
						</span>
					</div>
				</div>
			</div>
		)
	}
}



export default Snapshot;
