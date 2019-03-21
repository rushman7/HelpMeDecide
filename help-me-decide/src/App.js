import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

export default App;
