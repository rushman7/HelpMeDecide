import React from 'react';
import Option from './Option';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      options: [],
      title: 'Help Me Decide!',
      subtitle: 'Allow us to decide for you!',
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({
          options: options
        }))
      }
    } catch (e) {

    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
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
  
  handleRemove(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0} 
            optionsLength={this.state.options.length}
            singularOption={this.state.options}
          />
          <div className="widget-header">
            <h3 className="widget-header-title">Your Options</h3>
            <button 
              onClick={this.handleRemoveAll}
              className="button button-link">
              Remove All
            </button>
          </div>
          <div className="widget">
            {this.state.options.length === 0 && <p className="message">Add a choice.</p>}
            {
              this.state.options.map((option, index) => (
                  <Option
                    key={option} 
                    optionText={option} 
                    count={index + 1}
                    handleRemove={this.handleRemove}
                  />
                ))
            }
            <AddOption 
              handleAddOption={this.handleAddOption} 
              onClick={this.toggleModal}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Options