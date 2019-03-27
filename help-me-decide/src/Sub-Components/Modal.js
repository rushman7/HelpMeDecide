import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('portal'); // portal div is now root

class Modal extends React.Component {
  constructor() {
    super();
    this.el = document.createElement('div'); // creates portal div
  }
}

export default Modal;