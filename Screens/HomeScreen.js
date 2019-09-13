import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import Header from "../Components/Header";
// import App from "../App";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Header"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
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
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20
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
