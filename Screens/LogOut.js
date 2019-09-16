import React, {Component} from "react";
import { Text } from "react-native";

class LogOut extends Component {
  render() {
    return this.props.navigation.navigate("Home");
  }
}

export default LogOut;
