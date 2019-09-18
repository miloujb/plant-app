import React, { Component } from "react";

class LogOut extends Component {
  render() {
    return this.props.navigation.navigate("Home");
  }
}

export default LogOut;
