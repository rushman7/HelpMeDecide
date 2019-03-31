import React from 'react';

class Option extends React.Component {
  render() {
    return (
      <div className="option">
        <button 
          className="button button-link"
          onClick={() => {
            this.props.handleRemove(this.props.optionText)
          }}>
          {this.props.count}. {this.props.optionText}
        </button>
      </div>
    )
  }
}

export default Option;