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
import water from "react-native-vector-icons";
import bg from "../assets/bg.jpg";

class MyGarden extends React.Component {
  state = {
    isLoading: true,
    data: []
  };
  render() {
    console.log(new Date(Date.now()).toString());
    console.log(new Date(Date.now()));
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
            <View style={styles.wrap}>
              <View style={styles.temperature}>
                <Text style={{ fontSize: 40, fontWeight: "500" }}>
                  {data[0].temp_inside + "°C"}
                </Text>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "500",
                    textAlign: "right"
                  }}
                >
                  {data[0].humidity + "%"}
                </Text>
              </View>
              <View style={styles.icons}>
                <Text>WindowOpen</Text>
                <Text>WaterOn</Text>
              </View>
            </View>
            <View style={styles.wrap1}>
              <TouchableOpacity style={styles.button1}>
                <Text style={styles.text}>Open Window</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomHalf}>
              <View style={styles.wrap}>
                <View style={styles.BottomRight}>
                  <View style={styles.soil}>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>
                      Soil Moisture:
                    </Text>
                    <Text style={{ fontSize: 30, fontWeight: "500" }}>
                      {data[0].soil_moist}
                    </Text>
                  </View>
                </View>
                <View style={styles.bottomLeft}>
                  <Text style={{ fontSize: 20, fontWeight: "500" }}>
                    Snapdragon
                  </Text>
                  <Image style={styles.plant} source={bg}></Image>
                </View>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Water</Text>
              </TouchableOpacity>
            </View>
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
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   flexDirection: "row",
  //   flexWrap: "wrap"
  //   // left: 0,
  //   // top: 0
  // },
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
    padding: 15,
    // borderRadius: 50,
    // backgroundColor: "#d4fc79",
    // margin: 0,
    // width: "100%",
    borderRadius: 50,
    backgroundColor: "#d4fc79",
    justifyContent: "center"
  },
  button1: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#d4fc79",
    justifyContent: "center"
  },
  topHalf: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 5
    // paddingBottom: 20,
    // marginBottom: 20
  },
  touchable: {
    color: "black",
    borderRadius: 30,
    paddingBottom: 20,
    justifyContent: "flex-end"
  },
  temperature: {
    borderWidth: 2,
    borderColor: "orange",
    textAlign: "right"
  },
  icons: {
    borderWidth: 2,
    borderColor: "red"
  },
  wrap: {
    borderWidth: 2,
    borderColor: "blue",
    flexWrap: "wrap",
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  },
  wrap1: {
    justifyContent: "center"
  },
  BottomRight: {
    borderWidth: 2,
    borderColor: "pink"
  },
  bottomLeft: {},
  bottomHalf: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 5
  },
  plant: {
    height: 120,
    width: 120
  },
  soil: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  }
});

export default MyGarden;
