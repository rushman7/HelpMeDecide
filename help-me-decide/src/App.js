import React, { Component } from 'react';
import Header from './Sub-Components/Header';
import Options from './Sub-Components/Options';
import EditOption from './Sub-Components/EditOption';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Help Me Decide!',
      subtitle: 'Allow us to decide for you!'
    };
  };

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Options/>
        <EditOption />
      </div>
    );
  }
}

export default App;
