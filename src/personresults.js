import React, {Component} from 'react';
import Personradar from './personradar'

import './cards.css';


class Personresults extends Component {
	//data
state ={
	personality: []
}
	//functions
componentWillMount() {
	// console.log('person',this.props.personality);

	let array = this.props.personality
	array.forEach((a) =>{
		if (a.percentile > .5 && a.raw_score > .5) {
			this.state.personality.push(a)
		}
	})
}

changeClass = () => {
  var element = document.getElementById("definition-person");
  element.classList.add("active");
}

removeClass = () => {
  var element = document.getElementById("definition-person");
  element.classList.remove("active");
}

	//render
	render() {

		return (
			<div >

				<div id="definition-person" className="fixed-top">
					<div className="card text-center">
						<div className="card-header">
							Personality Definition
						</div>
						<div id="person-body" className="card-body">
							<ul>

								<li>Agreeableness</li>
								<ul>
									<li>Present: Value getting along with others. They have a more optimistic view of human nature.</li>
									<li>Not Present: Value self interests over others. They are more skeptical of others motives.</li>
								</ul>
								<li>Concientiousness</li>
								<ul>
									<li>Present: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.</li>
									<li>Not Present:  More likely to prefer the spontaneous over the planned.</li>
								</ul>
								<li>Openness</li>
								<ul>
									<li>Present: Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.</li>
									<li>Not Present: Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle.</li>
								</ul>
								<li>Extraversion - More energetic and pronounced engagement with the external world. Likes high group visibility, talking, and asserting themselves.</li>
								<ul>
									<li>Present: More energetic and pronounced engagement with the external world. Likes high group visibility, talking, and asserting themselves. </li>
									<li>Not Present: Needs less stimulation and are more independent of their social world. It does not mean they are shy, un-friendly, or antisocial.</li>
								</ul>
								<li>Emotional Range - More likely to have negative emotions or get upset. It could mean they are going through a tough time.</li>
								<ul>
									<li>Present: More likely to have negative emotions or get upset. It could mean they are going through a tough time.</li>
									<li>Not Present: More calm and less likely to get upset. It does not mean they are positive, or happy people.</li>
								</ul>
							</ul>
						</div>
						<div onClick={this.removeClass} className="card-footer">
							close
						</div>
					</div>
				</div>


			<div className="card text-center">
				<div className="card-header">
					Personality
				</div>
				<div className="card-body">
					<ul className="pers">
						{
							this.state.personality.map((t)=>{
								return <Personradar document={t} key={t.trait_id}/>
							})
						}
					</ul>
				</div>
				<div onClick={this.changeClass} className="card-footer">
					Definitions
				</div>
			</div>
			</div>
		)
	}
}



export default Personresults;
