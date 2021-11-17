import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscClose);
  }

  handleEscClose = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      console.log("event.target", event.target);
      console.log("event.currentTarget", event.currentTarget);
      this.props.onClose();
    }
  };

  render() {
    const { bigImage } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={bigImage} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
