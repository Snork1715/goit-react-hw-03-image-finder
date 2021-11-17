import React, { Component } from "react";
import "./ImageGalleryItem.css";

class ImageGalleryItem extends Component {
  render() {
    const { images } = this.props;
    return images.hits.map((image) => (
      <li key={image.id} className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={image.webformatURL}
          alt=""
        />
      </li>
    ));
  }
}

export default ImageGalleryItem;
