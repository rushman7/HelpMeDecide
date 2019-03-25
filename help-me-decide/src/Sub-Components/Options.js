import React from 'react';
import Option from './Option';
import Action from './Action';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: [
        'Option One', 
        'Option Two', 
        'Option Three',
      ]
    }
  }

  handleRemoveAll() {
    this.setState(() => {
      return {
        options: []
      };
    });
    console.log(this.state.options)
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option  = this.state.options[randomNum];
    alert(option);
  }

  render() {
    return (
      <div>
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
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