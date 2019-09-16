import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground
} from "react-native";
// import Header from "../Components/Header";
import { Header, Left, Right, Icon } from "native-base";
import { getAllData } from "../api";
import { TouchableOpacity } from "react-native-gesture-handler";

class MyGarden extends React.Component {
  state = {
    isLoading: true,
    data: []
  };
  render() {
    const { data, isLoading } = this.state;
    const { navigate, openDrawer } = this.props.navigation;
    if (data !== undefined && isLoading === false) {
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
          <View style={styles.topHalf}>
            <Text style={{ fontSize: 30, fontWeight: "500" }}>
              Temp: {data[0].temp_inside}
            </Text>
            <Text style={{ fontSize: 30, fontWeight: "500" }}>
              Hum: {data[0].humidity}
            </Text>
          </View>
          <View style={styles.touchable}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.text}>Open Window</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Water Plant</Text>
            </TouchableOpacity>
            <Button title="To my plants"></Button>
            {/* <View style={styles.container}>
            <ImageBackground
    width: "75%"
  },
  button1: {
    padding: 50,
    borderRadius: 50,
    backgroundColor: "#d4fc79",
    margin: 0,
    width: "75%"
  },
  topHalf: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  touchable: {
    color: "black",
    flex: 1,
    borderRadius: 30,
    paddingBottom: 150,
    justifyContent: "space-between",
    flexDirection: "row"
  }
});

export default MyGarden;

              style={styles.image}
              source={require("../assets/greenhouse.jpg")}
            >
              <Text style={styles.text} onPress={() => navigate("Plants")}>
                My Garden
              </Text>
            </ImageBackground>
          </View> */}
          </View>
        </>
      );
    } else {
      return null;
    }
  }
  componentDidMount = () => {
    this.fetchAllData();
  };

  fetchAllData = () => {
    getAllData()
      .then(data => {
        console.log(data, "plant");
        this.setState({ data, isLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap"
    // left: 0,
    // top: 0
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    justifyContent: "center"
    // position: "absolute",
    // bottom: 0
    // right: 0
  },
  button: {
    padding: 50,
    borderRadius: 50,
    backgroundColor: "#d4fc79",
    margin: 0,
    width: "100%"
  },
  button1: {
    padding: 50,
    borderRadius: 50,
    backgroundColor: "#d4fc79",
    marginRight: 20,
    width: "100%"
  },
  topHalf: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  touchable: {
    color: "black",
    flex: 1,
    borderRadius: 30,
    paddingBottom: 150,
    justifyContent: "space-between",
    flexDirection: "row"
  }
});

export default MyGarden;
