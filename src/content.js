import React, {Component} from 'react';

import axios from 'axios'
import Snapshot from './snapshot'
import Sidebar from './sidebar'


class Content extends Component {
	//data
state = {
	analysis: [],
	calc: {},

}
	//functions
	componentWillMount() {
			axios.get('http://localhost:4000/api/analysis', {headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}}).then((res)=> {
				this.setState({
					analysis: res.data.data,
					calc: res.data.clac
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
				<Sidebar calc={this.state.calc} />
		</div>
		)
	}
}



export default Content;
