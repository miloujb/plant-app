import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Menu</Text>
      <Text style={styles.text}>Header</Text>
      <Button title="back"></Button>
    </View>
  );
};

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

export default Header;
