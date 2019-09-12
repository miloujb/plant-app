import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class MyGarden extends React.Component {
  render() {
    return (
      <View>
        <Button
          title="home"
          onPress={() => this.props.navigation.navigate("App")}
        ></Button>
      </View>
    );
  }
}

export default MyGarden;
