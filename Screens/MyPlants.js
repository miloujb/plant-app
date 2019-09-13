import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import { getAllData } from "../api";

const plants = [{ name: "tomato" }, { name: "snapdragon" }, { name: "beans" }];
class MyPlants extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={plants}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }

  componentDidMount = () => {
    this.fetchAllData();
  };

  fetchAllData = () => {
    getAllData()
      .then(data => {
        this.setState({ data });
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
