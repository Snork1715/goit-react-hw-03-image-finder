import React, { Component } from "react";
import "./App.css";
// import Skeleton from "./components/Skeleton";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";

const key = "24369535-8c0b0d7fa83b493b4b387e45e";

class App extends Component {
  state = {
    images: null,
    loading: false,
    selectedImage: null,
    imagesType: "",
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imagesType !== this.state.imagesType) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.imagesType}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((Response) => {
          if (Response.ok) {
            return Response.json();
          }
          return Promise.reject(
            new Error(
              `Выбран некорректный тип фотографий ${this.state.imagesType}`
            )
          );
        })
        .then((images) => {
          this.setState({ images });
        })
        .catch((error) => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }

    if (prevState.page !== this.state.page) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.imagesType}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          response.json();
        })
        // .then((images) => {
        //   this.setState({
        //     images: [...prevState.images, ...images],
        //   });
        // })
        .then((images) =>
          this.setState((prevState) => ({
            images: [...images, ...prevState.images],
          }))
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
    return (
      <div className="App">
        <Searchbar onSubmit={this.getImageType} />
        {this.state.error && <div>{this.state.error.message}</div>}
        {this.state.images && <ImageGallery images={this.state.images} />}
        {this.state.images && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}

export default App;
