import React from 'react';
import Modal from './Modal';

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
          <Modal onClose={this.toggleModal}>
            <div
              className="modal-container"
              style={{
                maxWidth: 400,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
              }}>
              <h3>The choice is...</h3>
              <p>{this.state.selectedOption}</p>
            </div>
          </Modal>
        ) : null}
      </div>
      </div>
    )
  }
}

export default Action;