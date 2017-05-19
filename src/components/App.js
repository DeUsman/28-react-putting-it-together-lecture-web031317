import React from 'react'

import NavBar from './NavBar'
import StudentList from './StudentList'
import StudentForm from './StudentForm'
import Blink from './blink'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      names: ["Usman", "Scott", "Meryl", "Liz", "Alex", "Darth Vader", "Sammy", "Sarah"]
    }
  }


  handleAddDog(){
    // BAD =- should use the function form
    this.setState({names: [...this.state.names, "Fido"]})
  }


  handleAddStudent(name){
    console.log('inside handleAddStudent', this)
    this.setState( prevState =>  ({ names: [...prevState.names, name] }) )
  }


  render(){
    console.log('render called in App!')

    return (
      <div>
          < NavBar color='black' title={`Listing out ${this.state.names.length} really cool students`} />
          <div className='row'>
            <div className='col-md-4'>
              < StudentList students={this.state.names} />
              <button onClick={this.handleAddDog.bind(this)}>Add Dog!</button>
            </div>

            <div className='col-md-8'>
              < StudentForm  onSubmit={ this.handleAddStudent.bind(this) }/>
            </div>
          </div>
      </div>
    )
  }
}

export default App
