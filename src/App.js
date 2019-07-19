import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Snapshot from './snapshot'
import Sidebar from './sidebar'
import Bottomnav from './bottomnav'
import Personality from './personality'
import Keywords from './keywords'
import Toptraits from './toptraits'

function App() {
  return (

<div id="wrap">
	<div className="row">
		<Snapshot />
		<Sidebar />
	</div>
	<div className="row">
		<Personality />
		<Keywords />
		<Toptraits />
	</div>
	<Bottomnav />
</div>


  )
}

export default App;
