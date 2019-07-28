import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Snapshot from './snapshot'
import Sidebar from './sidebar'
import Bottomnav from './bottomnav'
import Topnav from './topnav'


function App() {
  return (

<div id="wrap">

<Topnav />

	<div id="content" className="row">
		<Snapshot />
		<Sidebar />
	</div>

	<Bottomnav />
</div>


  )
}

export default App;
