import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  Alert
} from "react-native";
import Header from "./AppHeader";
import { withTheme } from "react-native-elements";

export default class LogInScreen extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };
  state = {
    username: "",
    password: ""
  };

  static navigationOptions = {
    header: null
  };
  checkLogin() {
    const { username, password } = this.state;
    if (username == "admin" && password == "admin") {
      this.props.navigation.navigate("MyGarden");
    } else {
      Alert.alert("Error", "Username or Password is not correct", [
        { text: "Okay" }
      ]);
    }
  }
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
              <Text style={styles.text}>Login into your account</Text>
              <TextInput
                placeholder="email"
                style={styles.input}
                onChangeText={text => this.setState({ username: text })}
              ></TextInput>
              <TextInput
                placeholder="password"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={text => this.setState({ password: text })}
              />
              <View>
                <Button
                  title="LogIn"
                  style={styles.button}
                  onPress={() => this.checkLogin()}
                />
              </View>
              <View>
                <Button
                  style={styles.signUpButton}
                  title="Sign Up"
                  onPress={() => navigate("MyGarden")}
                />
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
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  button: {
    padding: 50,
    paddingBottom: 150,
    borderRadius: 50,
    backgroundColor: "#23b11b"
  },
  signUpButton: {
    padding: 50,
    paddingBottom: 150,
    borderRadius: 50,
    backgroundColor: "green"
  }
});
