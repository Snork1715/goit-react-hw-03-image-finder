import React, { Component } from "react";
import Loader from "react-loader-spinner";

class Skeleton extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}

export default Skeleton;
