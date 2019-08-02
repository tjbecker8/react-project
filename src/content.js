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
			axios.get(`${process.env.REACT_APP_API}api/analysis`, {headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}}).then((res)=> {
					// console.log('calc',res.data.calc);
				this.setState({
					analysis: res.data.data,
					calc: res.data.calc,
				})
			}).catch((err)=> {
				console.log('err', err);
			})
		}









	//render
	render() {
		return (
			<div id="content" className="row">
				<Snapshot calc={this.state.calc} />
				<Sidebar analysis={this.state.analysis} />
		</div>
		)
	}
}



export default Content;
