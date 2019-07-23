import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Personresults from './personresults'
import Bottomnav from './bottomnav'
import Consumerneeds from './consumerneeds'
import Values from './values'
import Likley from './likley'
import Unlikley from './unlikley'
import Keywords from './keywords'
import Tones from './tones'


function Analysis() {
  return (

<div id="wrap">
	<div className="row">
		<Personresults />
		<Consumerneeds />
		<Values />
		<Tones />

	</div>
	<div className="row">
		<Likley />
		<Unlikley />
		<Keywords />
	</div>
	<Bottomnav />
</div>


  )
}

export default Analysis;
