import React, {Component} from 'react';
import Options from './list-item'
import axios from 'axios'
import './sidebar.css';
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

		selectAnalysis = (id) => {
				let analysis = this.state.analysis
				analysis.map((a)=> a.active = false) //add the active property to each element

				let analysi = analysis.find((a) => a._id === id)
				analysi.active = true
				this.setState({analysis})
				console.log(this.state.analysis);

			}



	//render
	render() {
		return (
			<div className="col-4">
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Previous Analysis</h5>
				<form onSubmit={(e) => {
						this.testId()}
					} >
				<div className="form-group">
				    <ul className="list-group">
							{
						this.state.analysis.map((a)=> {
							return <Options selectAnalysis={this.selectAnalysis} analysis={a} key={a._id} />
						})
					}
				</ul>
				  </div>
				<button type="submit" className="btn btn-primary">View analysis</button>
				</form>
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
