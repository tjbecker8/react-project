import React, {Component} from 'react';
import Options from './list-item'
import axios from 'axios'
import './sidebar.css';

class Sidebar extends Component {
	//data
state = {
	analysis: [],
	target: [],
}
	//functions




		componentWillReceiveProps(props) {

			this.setState({
				analysis: props.analysis
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



	search =() => {
	    var input, filter, ul, li, a, i, txtValue;
	    input = document.getElementById("myInput");
	    filter = input.value.toUpperCase();
	    ul = document.getElementById("sidebar-ul");
	    li = ul.getElementsByTagName("li");
	    for (i = 0; i < li.length; i++) {
	        a = li[i].getElementsByTagName("a")[0];
	        txtValue = a.textContent || a.innerText;
	        if (txtValue.toUpperCase().indexOf(filter) > -1) {
	            li[i].style.display = "";
	        } else {
	            li[i].style.display = "none";
	        }
	    }
	}


	//render
	render() {
		return (
			<div className="col-4">
		<div id="sidebar" className="card">
			<div id="header" className="card-header">
				<h2 className="card-title">Previous Analysis</h2>
			</div>
			<div id="sidebar-body" className="card-body">
				<div id="sidebar-form" className="form-group">

				    <ul id="sidebar-ul" className="list-group">
							{
						this.state.analysis.map((a)=> {
							return <Options selectAnalysis={this.selectAnalysis} analysis={a} key={a._id} />
						})
					}
				</ul>
				  </div>

			</div>
			<div className="card-footer text-muted">

	  	</div>
		</div>
	</div>
		)
	}
}



export default Sidebar;
