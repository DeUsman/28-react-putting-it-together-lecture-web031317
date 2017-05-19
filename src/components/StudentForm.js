import React from 'react'
var count = 0
// Needs to have some internal state - class based component

export default class StudentForm extends React.Component {

  constructor(props){
    super()
    console.log(props)
    this.state = { student: ''}

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e){
    this.setState({
      student: e.target.value
    })
  }

  handleSubmit(e){
    // 1. Prevent the default action
    e.preventDefault()
    // 2. take what the state is at this given time, and somehow, some way notify the App of a change
    this.props.onSubmit( this.state.student )
    // 3. Reset the value of that input
    this.setState({student: ''})
  }

  render(){
   
    //console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Student Name</label>
        <input type='text' value={this.state.student} onChange={this.handleInputChange}/>
        <input type='submit' value='Add a Student' />
      </form>
    )
  }
}
