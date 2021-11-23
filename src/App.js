import React, { Component } from "react";
import "./App.css";
import Skeleton from "./components/Skeleton";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import FetchImages from "./services/FetchImage";

class App extends Component {
  state = {
    images: [],
    loading: false,
    // selectedImage: null,
    imagesType: "",
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imagesType !== this.state.imagesType) {
      this.setState({ loading: true, images: [] });

      setTimeout(() => {
        FetchImages.fetchImage(this.state.imagesType, this.state.page)
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
      setTimeout(() => {
        FetchImages.fetchImage(this.state.imagesType, this.state.page)
          .then(({ hits }) =>
            this.setState({
              images: [...prevState.images, ...hits],
            })
          )
          .finally(() => {
            this.setState({ loading: false });
          });
      }, 1500);
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
        <ImageGallery images={images} />
        {images.length !== 0 && !this.state.loading ? (
          <Button onClick={this.handleLoadMore} />
        ) : images.length !== 0 && this.state.loading ? (
          <Skeleton />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
