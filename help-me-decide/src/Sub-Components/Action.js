import React from 'react';

class Action extends React.Component {
  handlePick() {
    alert('HandlePick');
  }

  render() {
    return (
      <div>
        <button 
          onClick={this.handlePick}
          disabled={!this.props.hasOptions}
          >
          What should I do?
        </button>
      </div>
    )
  }
}

export default Action;