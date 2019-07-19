import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Personresults from './personresults'
import Bottomnav from './bottomnav'
import Consumerneeds from './consumerneeds'


function App() {
  return (

<div id="wrap">
	<div className="row">
		<Personresults />
		<Consumerneeds />

	</div>
	<div className="row">

	</div>
	<Bottomnav />
</div>


  )
}

export default App;
