import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ImageBackground
} from "react-native";
import { getAllData } from "../api";
import { Header, Left, Right, Icon } from "native-base";
import hamster from "../images/hamster.gif";
import MyGarden from "./MyGarden";

class MyPlants extends Component {
  state = {
    isLoading: true,
    data: []
  };
  render() {
    const { data, isLoading } = this.state;
    const { navigate, openDrawer } = this.props.navigation;
    if (isLoading)
      return (
        <Image
          source={require("../images/hamster.gif")}
          styles={styles.image}
        />
      );
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
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.text}>
                  {item.id} {item.humidity}
                </Text>
              </View>
            )}
          />
        </View>
      </>
    );
  }

  componentDidMount = () => {
    this.fetchAllData();
  };

  fetchAllData = () => {
    getAllData()
      .then(data => {
        this.setState({ data, isLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  };
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
    color: "black",
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

export default MyPlants;
