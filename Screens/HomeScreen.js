import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground
} from "react-native";
import Header from "../Components/Header";

export default class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <ImageBackground
          source={require("../images/background.jpg")}
          style={((width = "100%"), (height = "100%"))}
        >
          <View>
            {/* <App /> */}
            <Header />
          </View>
          <View style={{ padding: 100, alignItems: "center" }}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <Text style={styles.text}>Welcome to your garden!</Text>
              <TextInput placeholder="email" style={styles.input}></TextInput>
              <TextInput placeholder="password" style={styles.input} />
              <View>
                <Button title="Log In" onPress={() => navigate("MyGarden")} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 300,
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "white"
  },
  text: {
    alignContent: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
  button: {
    padding: 50,
    borderRadius: 50,
    backgroundColor: "#23b11b"
  }
});
