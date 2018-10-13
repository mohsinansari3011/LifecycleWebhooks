import React, { Component } from 'react';
//import './App.css';
import './App.css';
import Kid from './kids';
import Teacher from './teacher';
import Judge from "./judge";
class App extends Component {


constructor(prop){

	super(prop)


	this.state = {

		volume: 0,
		available: false,
		applaud: '',
		
		stars: 0,
		nextSteps: [],
	};

	this.furtherSteps = this.furtherSteps.bind(this)
	this.getApplaudStatus = this.getApplaudStatus.bind(this)
	this.recieveStars = this.recieveStars.bind(this)
	this.renderJudgesComp = this.renderJudgesComp.bind(this)
}



	furtherSteps(nextSteps) {

		console.log("furtherSteps app.js ", nextSteps);
		this.setState({ nextSteps })
	}
	getApplaudStatus(applaud) {
		console.log("applaud app.js ", applaud);
		this.setState({ applaud })
	}
	recieveStars(stars) {
		console.log("stars app.js ", stars);
		this.setState({ stars })
	}
	renderJudgesComp(param) {
		console.log("param app.js ", param);
		this.setState({ renderJudges: param })
	}


	componentWillMount() {
		this.setState({ volume: 5, available: true, renderJudges: true })
	}

	// GetDerivedStateFromProps(){

	// 	this.setState({
	// 		volume: 5, available: true, renderJudges: true
	// 	})

		
	// }





  render() {

  

	  const { nextSteps, applaud, stars, available } = this.state

    return (

    	<div>

			{available ? <Kid dressColor={"blue"} furtherSteps={nextSteps} sendApplaudStatus={applaud} sendStars={stars} renderJudgesComp={this.renderJudgesComp} /> : <div> Kid not available </div>}	
			<br />  <br /> 
		<Teacher myCallBack={this.furtherSteps} />
			<br />
			<button onClick={() => { this.setState({ available: false }); }}>Leave Show</button>
			
			 <br /><br /> 
			{<Judge getApplaudStatus={this.getApplaudStatus} recieveStars={this.recieveStars} available={available} /> }
		</div>

     
     
     

   
    

    );
  }

}


export default App;
