import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
// import Header from "../Components/Header";
import ReactorGrowFinal2 from "../assets/ReactorGrowFinal2.png";
import { Header, Left, Right, Icon } from "native-base";
import backgroundimg from "../assets/backgroundimg.jpg";

export default class HomeScreen extends React.Component {
  state = {
    username: "",
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
    const { username, password } = this.state;
    if (username == "a" && password == "a") {
      this.props.navigation.navigate("Garden");
      this.setState({ password: "", username: "" });
    } else {
      Alert.alert("Error", "Username or Password is not correct", [
        { text: "Okay" }
      ]);
    }
  }

  render() {
    const { password, username } = this.state;
    const { navigate, openDrawer } = this.props.navigation;
    return (
      <>
        <ImageBackground source={backgroundimg} style={styles.background}>
          <Header
            style={{
              margin: "auto",
              backgroundColor: "white",
              opacity: 0
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {/* <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                color: "black"
              }}
            >
              Reactor Grow
            </Text> */}
            </View>
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
              <Text style={styles.text}>Login into your account</Text>
              <TextInput
                placeholder="John Doe"
                style={styles.input}
                value={username}
                onChangeText={text => this.setState({ username: text })}
              ></TextInput>
              <TextInput
                placeholder="your password"
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
          {/* </ImageBackground> */}
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
    marginBottom: 20
    // backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    color: "white",
    textShadowColor: "black",
    fontSize: 24,
    fontWeight: "bold"
  },
  button: {
    // backgroundColor: "lightgrey",
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
    opacity: 0.8
  },
  disabled: {
    opacity: 0.5
  },
  background: {}
});

/*<ImageBackground
source={require("../images/background.jpg")}
style={((width = "100%"), (height = "100%"))}
>
<View>
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
</ImageBackground>*/
