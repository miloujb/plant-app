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

export default class HomeScreen extends React.Component {
  state = {
    username: "",
    password: ""
  };

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => {
      <Icon name="home" style={{ fontSize: 24, color: tintColor }}></Icon>;
    }
  };
  checkLogin() {
    const { username, password } = this.state;
    if (username == "a" && password == "a") {
      console.log(this.props.navigation, "<<<<<");
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
        <Header
          style={{
            margin: "auto",
            backgroundColor: "#d4fc79"
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24
              }}
            >
              Reactor Grow
            </Text>
          </View>
        </Header>
        {/* <ImageBackground source={require(bg.jpg)}> */}
        <View style={styles.container}>
          <Image source={ReactorGrowFinal2} style={styles.image} />
        </View>
        <View style={styles.overlay}></View>
        <View style={{ padding: 150, alignItems: "center" }}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              paddingBottom: 200
            }}
          >
            {/* <Text style={styles.text}>Welcome to your garden!</Text> */}
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
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </ImageBackground> */}
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
    flexDirection: "column",
    paddingTop: 150
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
    color: "black",
    fontSize: 24,
    fontWeight: "bold"
  },
  button: {
    color: "black",
    backgroundColor: "#d4fc79",
    borderRadius: 10,
    padding: 10
    // flex: 1,
    // flexDirection: "column"
    // justifyContent: "space-between"
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200
  }
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
