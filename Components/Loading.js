import React from "react";
import { Image, View, StyleSheet } from "react-native";
import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <View style={styles.loader}>
      <Image source={loading} styles={styles.loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    top: "35%"
    // left: "50%"
  }
});

export default Loading;
