import React, { Component } from 'react';
import Header from './Header';
import Options from './Options';
import EditOption from './EditOption';
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
        <br />
      </div>
    );
  }
}

export default App;
