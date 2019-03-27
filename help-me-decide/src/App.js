import React, { Component } from 'react';
import Options from './Sub-Components/Options';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>header</p>
        <Options/>
        <p>footer</p>
      </div>
    );
  }
}

export default App;
