import React from 'react'


 export default class Person extends React.Component {

  render() {
console.log(this.state.foo)
    return (
      <div>{ this.props.name } (age: { this.props.age })</div>
    );
  }
}

Person.defaultProps = { age: null };

