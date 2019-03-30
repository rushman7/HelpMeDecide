import React from 'react';

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
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