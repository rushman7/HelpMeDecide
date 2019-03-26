import React from 'react';
import Option from './Option';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: [],
      title: 'Help Me Decide!',
      subtitle: 'Allow us to decide for you!',
    }
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a value.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Value already exists.'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    });
  }

  handleRemoveAll() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option  = this.state.options[randomNum];
    alert(option);
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
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
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

export default Options