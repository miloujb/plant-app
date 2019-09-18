import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import ReactorGrowFinal2 from "../assets/ReactorGrowFinal2.png";
import { Header, Left, Right, Icon } from "native-base";
import backgroundimg from "../assets/backgroundimg.jpg";

export default class HomeScreen extends React.Component {
  state = {
    email: "",
    password: ""
  };

  static navigationOptions = {
    header: null,
    drawerIcon: ({ tintColor }) => {
      <Icon
        name="burger"
        style={{ fontSize: 24, backgroundColor: "white" }}
      ></Icon>;
    }
  };
  checkLogin() {
    const { email, password } = this.state;
    if (email == "a" && password == "a") {
      console.log("hello");
      this.props.navigation.navigate("Garden");
      this.setState({ password: "", email: "" });
    } else {
      Alert.alert("Error", "Incorrect email or password", [{ text: "Okay" }]);
    }
  }

  render() {
    const { password, email } = this.state;
    const { navigate, openDrawer } = this.props.navigation;
    return (
      <>
        <ImageBackground source={backgroundimg} style={styles.background}>
          <Header
            style={{
              margin: "auto",
              backgroundColor: "white",
              opacity: 0,
              marginTop: 40
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center"
              }}
            ></View>
          </Header>
          <View style={styles.container}>
            <Image source={ReactorGrowFinal2} style={styles.image} />
          </View>
          <View style={styles.overlay}></View>
          <View style={{ padding: 160, alignItems: "center" }}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                paddingBottom: 200
              }}
            >
              <Text style={styles.text}>Log into your account</Text>
              <TextInput
                placeholder="example@example.com"
                style={styles.input}
                value={email}
                onChangeText={text => this.setState({ email: text })}
              ></TextInput>
              <TextInput
                placeholder="password"
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={text => this.setState({ password: text })}
              />
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.checkLogin()}
                >
                  <Text style={styles.text}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} disabled>
                  <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
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
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
    // paddingTop: 50
  },
  input: {
    width: 300,
    borderBottomColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    opacity: 1,
    borderColor: "grey",
    marginBottom: 20,
    textAlign: "center",
    color: "white"
  },
  text: {
    textAlign: "center",
    color: "white",
    textShadowColor: "black",
    fontSize: 24,
    fontWeight: "bold"
  },
  button: {
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    opacity: 1
  },
  image: {
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
    width: 125,
    height: 125,
    borderRadius: 90,
    opacity: 0.8,
    borderWidth: 3,
    borderColor: "lightblue"
  },
  disabled: {
    opacity: 0.5
  },
  background: { width: "100%", height: "100%" }
});
