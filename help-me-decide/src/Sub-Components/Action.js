import React from 'react';
import Modal from './Modal';
import Fireworks from 'fireworks-react'

class Action extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      showModal: false,
      selectedOption: undefined,
    };
  }

  toggleModal = () => {
    const randomNum = Math.floor(Math.random() * this.props.optionsLength);
    const option  = this.props.singularOption[randomNum];
    
    this.setState({
      showModal: !this.state.showModal,
      selectedOption: option,
    });
  };

  render() {
    return (
      <div>
        <button 
          className="action-button"
          onClick={this.toggleModal}
          disabled={!this.props.hasOptions}
          >
          Click to Decide!
        </button>
        <div>
        {this.state.showModal ? (
          <Modal 
            onClose={this.toggleModal}>
            <Fireworks width={150} height={200}/> 
            <div
              className="modal-container-div">
              <h3 className="modal-container-title">The choice is...</h3>
              <p className="modal-container-body">{this.state.selectedOption}</p>
            </div>
          </Modal>
        ) : null}
      </div>
      </div>
    )
  }
}

export default Action;