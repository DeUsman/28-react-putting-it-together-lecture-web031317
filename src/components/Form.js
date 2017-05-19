import React from 'react';
import Person from './person';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    
    this.state        = { name: null } ;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var name = event.target.value

    this.setState({ name });

   
  
  }

  render() {
    
    return (
      <div>
        <input type="text" onChange={ this.handleChange } />
        <Person name={this.state.name} />
      </div>
    );
  }
}