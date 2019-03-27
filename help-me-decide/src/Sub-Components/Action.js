import React from 'react';
import Modal from './Modal';

class Action extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
          >
          What should I do?
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
              <button
                onClick={this.toggleModal}
              >
                Close
              </button>
            </div>
          </Modal>
        ) : null}
      </div>
      </div>
    )
  }
}

export default Action;