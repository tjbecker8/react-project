import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Snapshot from './snapshot'
import Sidebar from './sidebar'
import Bottomnav from './bottomnav'

function App() {
  return (

<div id="wrap">
	<div className="row">
		<Snapshot />
		<Sidebar />
	</div>
	<Bottomnav />
</div>


  )
}

export default App;
