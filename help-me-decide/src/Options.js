import React from 'react';
import Option from './Option';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Hello', 'Help']
    }
  }

  handleRemoveAll() {
    console.log(this.state.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.state.options.map(
            (option) => <Option key={option} optionText={option} />
          )
        }
      </div>
    )
  }
}


export default Options