import React, {Component} from 'react';

import axios from 'axios'
import Snapshot from './snapshot'
import Sidebar from './sidebar'


class Content extends Component {
	//data
state = {
	analysis: [],

}
	//functions
	componentWillMount() {
			axios.get('http://localhost:4000/full', {headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}}).then((res)=> {

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
			<div id="content" className="row">
				<Snapshot analysis={this.state.analysis} />
				<Sidebar analysis={this.state.analysis} />
		</div>
		)
	}
}



export default Content;
