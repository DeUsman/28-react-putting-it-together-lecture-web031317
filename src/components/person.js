import React from 'react';
import ReactDOM from 'react-dom'


export default class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    
    this.state = { name: "Give me the right name, IDIOT!" , id: "1"} ;
    
  }


  componentWillReceiveProps(nextProps) {

    console.log(nextProps)
    let name = nextProps.name

    this.setState({ name });
  }

   shouldComponentUpdate(nextProps, nextState) {
    return nextProps.name === 'usman'
  }

  render() {
   
    return (
      <div className={this.state.id}>
        { this.state.name } (age: { this.props.age })
      </div>
    );
  }
}

Person.defaultProps = { age: 'unknown' };

