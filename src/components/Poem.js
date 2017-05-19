import React from 'react'
import ReactDOM from 'react-dom'


export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      error: true
    };

    this.poemHandler = this.poemHandler.bind(this)
  }

  poemHandler(event) {
    const poem = event.target.value
 
    this.setState({
      poem: poem, error: true
    })
    
    var poemArray = poem.split("\n")
    var finalPoem = poemArray.map(function(line) { return line.replace(/\s+/g," ").trim()});
   
    var lineCheck = [5,3,5]
    for ( var i =0; i < finalPoem.length; i++) {
    	if(finalPoem[i].split(" ").length !== lineCheck[i]) {
    		this.setState({error: false})
    		
    		break;
    	} 
    }
    
  }

  render() {
  	
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.poemHandler} />
        {this.state.error ? <div id="poem-validation" style={{color: 'green'}}><b>'YOU GOT IT RIGHT!'</b></div> : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure! You are allowed only three lines!</div>} 
      </div>
    )
  }
}