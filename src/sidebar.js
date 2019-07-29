import React, {Component} from 'react';
import Options from './list-item'
import axios from 'axios'
import './sidebar.css';
import {Link} from 'react-router-dom'
class Sidebar extends Component {
	//data
state = {
	analysis: [],
	target: [],
}
	//functions
	componentWillMount() {
		console.log('hhhh',this.props.analysis);
				this.setState({
					analysis: this.props.analysis
				})
		}

		selectAnalysis = (id) => {
				let analysis = this.state.analysis
				analysis.map((a)=> a.active = false)

				let analysi = analysis.find((a) => a._id === id)
				analysi.active = true
				this.setState({analysis})
				// console.log(this.state.analysis);
				// console.log(id);

				axios.get(`http://localhost:4000/full?_id=${id}`).then((res)=> {
					// console.log(res.data[0]);
					this.setState({
						target: res.data[0]
					})
					// console.log(this.state.target);
				}).catch((err)=>{
					console.log(err)
				})
			}


	getAnalysis = () => {

	}



	//render
	render() {
		return (
			<div className="col-4">
		<div id="sidebar" className="card">
			<div id="header" className="card-header">
				<h5 className="card-title">Previous Analysis</h5>
			</div>
			<div className="card-body">
				<div className="form-group">
				    <ul className="list-group">
							{
						this.state.analysis.map((a)=> {
							return <Options selectAnalysis={this.selectAnalysis} analysis={a} key={a._id} />
						})
					}
				</ul>
				  </div>
					<Link id="view-analysis" to ={{
							pathname: '/analysis',
							aboutProps:{
								data: this.state.target,
							}
						}} >Veiw Analysis</Link>

			</div>
			<div className="card-footer text-muted">
				<form className="form-inline">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
					<button id="button-search" className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
	  	</div>
		</div>
	</div>
		)
	}
}



export default Sidebar;
