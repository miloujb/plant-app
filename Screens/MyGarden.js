import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground
} from "react-native";
import Header from "../Components/Header";

class MyGarden extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <ImageBackground
          source={require("../images/background.jpg")}
          style={((width = "100%"), (height = "100%"))}
        >
          <Header />
          <View>
            <View style={styles.container}>
              <ImageBackground
                style={styles.image}
                source={require("../assets/greenhouse.jpg")}
              >
                <Text style={styles.text} onPress={() => navigate("MyPlants")}>
                  My Garden
                </Text>
              </ImageBackground>
            </View>
          </View>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 275,
    height: 275,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    paddingTop: 225,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
    // left: 0,
    // top: 0
  },
  input: {
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
    // position: "absolute",
    // bottom: 0
    // right: 0
  },
  button: {
    padding: 50,
    borderRadius: 50,
    backgroundColor: "#23b11b"
  }
});

export default MyGarden;
