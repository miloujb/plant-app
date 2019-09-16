import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Alert,
  TextInput,
  TouchableOpacity
} from "react-native";
// import Header from "../Components/Header";
import ReactorGrowFinal2 from "../assets/ReactorGrowFinal2.png";
import { Header, Left, Right, Icon, ActionSheet } from "native-base";

export default class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };
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
    console.log(username, password);
    if (username == "admin" && password == "admin") {
      this.props.navigation.navigate("MyGarden");
    } else {
      Alert.alert("Error", "Username or Password is not correct", [
        { text: "Okay" }
      ]);
    }
  }

  render() {
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
          <Right>
            <Icon name="menu" onPress={() => openDrawer()} />
          </Right>
        </Header>
        <View style={styles.container}>
          <Image source={ReactorGrowFinal2} style={styles.image} />
        </View>
        <View style={{ padding: 150, alignItems: "center" }}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              paddingBottom: 200
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
                color="purple"
                title="LogIn"
                style={{ borderRadius: 100 }}
                onPress={() => this.checkLogin()}
              />
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
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "blue",
    paddingBottom: 100,
    color: "white"
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
