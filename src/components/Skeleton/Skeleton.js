import React, { Component } from "react";
import Loader from "react-loader-spinner";

class Skeleton extends Component {
  render() {
    return (
      <Loader
        className="Skeleton"
        type="Circles"
        color="#ff6200"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}

export default Skeleton;
