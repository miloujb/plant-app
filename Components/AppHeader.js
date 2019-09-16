import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Menu from "./Menu";
import { MenuButton } from "./MenuButton";
import { DrawerNavigator } from "../App";
import { withNavigation } from "react-navigation";
import { Header, Left, Right, Icon, ActionSheet } from "native-base";

export default class AppHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{
            paddingTop: 100,
            margin: "auto",
            backgroundColor: "#d4fc79"
          }}
        >
          <Right>
            <Icon
              style={{ paddingBottom: 50 }}
              name="menu"
              onPress={() => openDrawer()}
            />
          </Right>
        </Header>
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
