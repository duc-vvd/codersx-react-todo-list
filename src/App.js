import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const todos = [
      'Go to market',
      'Buy food',
      'Make dinner'
    ];
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {
              todos.map((item, index) => <li key={index}>{item}</li>)
            }
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
