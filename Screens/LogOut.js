import React, { Component } from "react";

class LogOut extends Component {
  render() {
    console.log("inside logout");
    return this.props.navigation.navigate("Home", { isLoggedIn: false });
  }
}

export default LogOut;
