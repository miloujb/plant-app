import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Menu from "../Components/Menu";
import { MenuButton } from "./MenuButton";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Menu</Text>
        <Text style={styles.text}>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  },
  text: {
    color: "white"
  }
});
