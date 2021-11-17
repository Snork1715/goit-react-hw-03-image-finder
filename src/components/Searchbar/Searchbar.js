import React, { Component } from "react";
import "./Searchbar.css";

class Searchbar extends Component {
  state = {
    imagesType: "",
  };

  handleClick = (event) => {
    this.setState({ imagesType: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.imagesType.trim() === "") {
      return;
    }
    this.props.onSubmit(this.state.imagesType);
    this.setState({ imagesType: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.imagesType}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleClick}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
