import React from 'react';

class Option extends React.Component {
  render() {
    return (
      <div className="option">
        <p className="option-text">{this.props.count}. {this.props.optionText}</p>
        <button 
          className="button button-link"
          onClick={() => {
            this.props.handleRemove(this.props.optionText)
          }}>
          Remove
        </button>
      </div>
    )
  }
}

export default Option;