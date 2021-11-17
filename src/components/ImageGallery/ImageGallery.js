import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
// import Modal from "../Modal";
import "./ImageGallery.css";

class ImageGallery extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { images } = this.props;
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem images={images} />
      </ul>
    );
  }
}

export default ImageGallery;
