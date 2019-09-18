import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View
} from "react-native";
import backgroundimg from "../assets/backgroundimg.jpg";

class MyPlants extends Component {
  render() {
    return (
      <>
        <ImageBackground source={backgroundimg} style={styles.background}>
          <ScrollView>
            <View>
              <Text style={{ justifyContent: "center", alignItems: "center" }}>
                Hello
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  background: {}
});

export default MyPlants;
