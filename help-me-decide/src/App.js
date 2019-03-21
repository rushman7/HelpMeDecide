import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        'Option One', 
        'Option Two', 
        'Option Three',
      ],
      title: 'Help Me Decide!',
      subtitle: 'Allow us to decide for you!'
    };
  };

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} subtitle={this.state.subtitle}/>
        <Action />
        <Options options={this.state.options}/>
        <AddOption />
        <br />
      </div>
    );
  }
}

export default App;
