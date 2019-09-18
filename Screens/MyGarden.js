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
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import bg from "../assets/bg.jpg";
import backgroundimg from "../assets/backgroundimg.jpg";

class MyGarden extends React.Component {
  static navigationOptions = {
    // header: null,
    // drawerIcon: ({ tintColor }) => {
    //   <Icon
    //     name="burger"
    //     style={{ fontSize: 24, backgroundColor: "white" }}
    //   ></Icon>;
    // }
  };
  state = {
    isLoading: true,
    data: [],
    window: "closed",
    hose: "off"
  };
  render() {
    console.log(new Date(Date.now()).toString());
    console.log(new Date(Date.now()));
    const { data, isLoading } = this.state;
    const { navigate, openDrawer } = this.props.navigation;
    if (isLoading)
      return (
        <Image
          source={require("../images/hamster.gif")}
          styles={styles.hamster}
        />
      );
    if (data !== undefined && isLoading === false) {
      return (
        <>
          <ImageBackground source={backgroundimg} style={styles.background}>
            <ScrollView>
              <Header
                style={{
                  margin: "auto",
                  backgroundColor: "transparent",
                  opacity: 1
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
                      fontSize: 24,
                      color: "white"
                    }}
                  >
                    Reactor Grow
                  </Text>
                </View>
                {/* <Right>
                  <Icon name="menu" onPress={() => openDrawer()} />
                </Right> */}
              </Header>
              <View style={styles.topHalf}>
                <View style={styles.wrap}>
                  <View style={styles.temperature}>
                    <View>
                      <Text style={{ fontWeight: "bold", color: "white" }}>
                        Inside Temp
                      </Text>
                      <Text
                        style={{
                          fontSize: 50,
                          fontWeight: "500",
                          color: "white"
                        }}
                      >
                        {data[data.length - 1].temp_inside + "°C"}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          textAlign: "right",
                          fontWeight: "bold",
                          color: "white"
                        }}
                      >
                        Humidity
                      </Text>
                      <Text
                        style={{
                          fontSize: 50,
                          fontWeight: "500",
                          color: "white"
                        }}
                      >
                        {data[data.length - 1].humidity + "%"}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.icons}>
                    {/* <Text>WindowOpen</Text>
                <Text>WaterOn</Text> */}
                  </View>
                </View>
                <View style={styles.bottomHalf}>
                  <View style={styles.wrap}>
                    <View style={styles.wrap}>
                      <View style={styles.BottomRight}>
                        <View style={styles.soil}>
                          <Text style={{ fontWeight: "bold", color: "white" }}>
                            Soil Moisture:
                          </Text>
                          <Text
                            style={{
                              fontSize: 50,
                              fontWeight: "500",
                              color: "white"
                            }}
                          >
                            {data[data.length - 1].soil_moist}
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              fontWeight: "bold",
                              color: "white",
                              textAlign: "right"
                            }}
                          >
                            Outside Temp:
                          </Text>
                          <Text
                            style={{
                              fontSize: 50,
                              fontWeight: "500",
                              color: "white"
                            }}
                          >
                            {data[data.length - 1].temp_out + "°C"}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.bottom}>
                      <Text
                        style={{
                          fontSize: 40,
                          fontWeight: "500",
                          color: "white"
                        }}
                      >
                        Snapdragon
                      </Text>
                      <Image style={styles.plant} source={bg}></Image>
                      <View style={styles.wrap1}>
                        <TouchableOpacity style={styles.button1}>
                          <Text style={styles.text}>Open Window</Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Water On</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
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
  // image: {
  //   width: 350,
  //   height: 350,
  //   flexGrow: 1,
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  //   // container: {
  //   //   flex: 1,
  //   //   backgroundColor: "#fff",
  //   //   flexDirection: "row",
  //   //   flexWrap: "wrap"
  //   //   // left: 0,
  //   //   // top: 0
  //   // },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
    //     textAlign: "center",
    //     justifyContent: "center"
    //     // position: "absolute",
    //     // bottom: 0
    //     // right: 0
  },
  button: {
    // borderRadius: 50,
    // backgroundColor: "#d4fc79",
    // margin: 0,
    // width: "100%",
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    opacity: 1
  },
  button1: {
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    opacity: 1
  },
  topHalf: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 5,
    margin: 10,
    paddingBottom: 20
    // marginBottom: 20
  },
  touchable: {
    color: "black",
    borderRadius: 30,
    paddingBottom: 20
    // justifyContent: "flex-end"
  },
  temperature: {
    borderWidth: 2,
    borderColor: "orange",
    borderTopColor: "grey",
    textAlign: "right",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  //   icons: {
  //     borderWidth: 2,
  //     borderColor: "red"
  //   },
  //   wrap: {
  //     borderWidth: 2,
  //     borderColor: "blue",
  //     // flexWrap: "wrap",
  //     flexDirection: "row-reverse",
  //     justifyContent: "space-between"
  //   },
  //   wrap1: {
  //     justifyContent: "center"
  //   },
  BottomRight: {
    borderWidth: 2,
    borderColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bottom: {
    borderWidth: 2,
    color: "yellow",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    paddingBottom: 120
  },
  //   bottomHalf: {
  //     flex: 1,
  //     flexDirection: "column",
  //     borderWidth: 5,
  //     paddingTop: 80
  //     // margin: 10
  //   },
  plant: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  background: {}
  //   soil: {
  //     flexDirection: "column",
  //     alignItems: "center",
  //     textAlign: "center"
  //   },
  //   hamster: {
  //     width: 250,
  //     height: 250,
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center"
  //   }
});

export default MyGarden;
