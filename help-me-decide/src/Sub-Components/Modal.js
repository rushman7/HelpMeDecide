import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('portal');

class Modal extends React.Component {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  componentDidMount = () => {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount = () => {
    modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(
      <div className="modal" onClick={this.props.onClose}>
        <div className="modal-container">
          {this.props.children}
        </div>
      </div>,
      this.el,
    ) 
  }
}

export default Modal;