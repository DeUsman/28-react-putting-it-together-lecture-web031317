import React from 'react';

export default class Blink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    this.myVar = setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);



  }


  stopInterval() {
    clearInterval(this.myVar)
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <div>
      <h1>{display}</h1>
      <button onClick={this.stopInterval.bind(this)} />
      </div>
    );
  }
}