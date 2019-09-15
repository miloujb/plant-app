import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Menu from "../Components/Menu";
import { MenuButton } from "./MenuButton";
import { DrawerNavigator } from "../App";
import { withNavigation } from "react-navigation";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={this.props.navigation.openDrawer()}>
          <Text>Open Drawer</Text>
        </TouchableOpacity> */}
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
