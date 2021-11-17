import React, { Component } from "react";
import "./ImageGalleryItem.css";
import Modal from "../Modal";

class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { webformatURL, bigImage } = this.props;

    return (
      <>
        <li className="ImageGalleryItem" onClick={this.toggleModal}>
          <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
        </li>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} bigImage={bigImage} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
