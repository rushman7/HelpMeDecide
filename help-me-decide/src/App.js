import React, { Component } from 'react';
import Options from './Sub-Components/Options';
import {Helmet} from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Help Me Decide</title>
        </Helmet>
        <Options />
      </div>
    );
  }
}

export default App;
