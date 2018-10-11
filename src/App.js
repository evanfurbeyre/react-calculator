import React, { Component } from 'react';
import Calculator from './Calculator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;
