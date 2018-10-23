import React, { Component } from 'react';
import './App.css';

function smaller(number) {
  if (number < 10) {
    return "yes"
  } else {
    return "no"
  }
}

const even = (number) => {
  if (number % 2) {
    return "yes"
  } else {
    return "no"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 5
    }
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <h1>About: {this.state.number}</h1>
        <ul>
          <li>Is it smaller than 10?</li>
          <span>{smaller(this.state.number)}
          </span>
          <li>Is it even?</li>
          <span>{even(this.state.number)}</span>
          <li>Is it perfect square? (4, 9, 16...)</li>
          <span></span>
        </ul >
        <button onClick={() => this.setState({ number: this.state.number + 2 })}>+ 2</button>
        <button onClick={() => this.setState({ number: this.state.number / 3 })}>/ 3</button>
        <button onClick={() => this.setState({ number: Math.sqrt(this.state.number) })}>sqrt</button>
      </div >
    );
  }
}

export default App;
