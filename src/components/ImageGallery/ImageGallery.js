import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import "./ImageGallery.css";

class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className="ImageGallery">
        {images.hits.map((image) => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            bigImage={image.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
