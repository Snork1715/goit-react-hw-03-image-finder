import React, { Component } from "react";
import "./App.css";
import Skeleton from "./components/Skeleton";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import FetchImages from "./services/FetchImage";

const APIkey = "24369535-8c0b0d7fa83b493b4b387e45e";

class App extends Component {
  state = {
    images: [],
    loading: false,
    selectedImage: null,
    imagesType: "",
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imagesType !== this.state.imagesType) {
      this.setState({ loading: true, images: [] });

      setTimeout(() => {
        FetchImages.fetchImage(this.state.imagesType, this.state.page, APIkey)
          .then(({ hits }) => {
            this.setState({ images: hits });
          })
          .catch((error) => this.setState({ error }))
          .finally(() => {
            this.setState({ loading: false });
          });
      }, 1000);
    }

    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.setState({ loading: true });
      FetchImages.fetchImage(this.state.imagesType, this.state.page, APIkey)
        .then(({ hits }) =>
          this.setState({
            images: [...prevState.images, ...hits],
          })
        )
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  getImageType = (imType) => {
    this.setState({ imagesType: imType, page: 1 });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { error, images, loading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.getImageType} />
        {error && <div>{error.message}</div>}
        {loading && <Skeleton />}
        {images.length !== 0 && <ImageGallery images={images} />}
        {images.length !== 0 && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}

export default App;
