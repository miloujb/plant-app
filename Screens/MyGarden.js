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
import greenhouseplant from "../assets/greenhouseplant.jpg";

class MyGarden extends React.Component {
  static navigationOptions = {
    header: null,
    headerTransparent: true,
    drawerIcon: ({ tintColor }) => {
      <Icon
        name="burger"
        style={{ fontSize: 24, backgroundColor: "white" }}
      ></Icon>;
    }
  };
  state = {
    isLoading: true,
    data: [{ water: "false", window: "false" }]
  };

  setWaterStatus() {
    const {
      data: { water }
    } = this.state;
    if (water === false) {
      this.setState({ water: true });
    }
  }

  setWindowStatus() {
    const {
      data: { window }
    } = this.state;
    if (window === false) {
      this.setState({ window: true });
    }
  }

  refreshPage() {
    this.fetchAllData();
  }

  render() {
    const { data, isLoading } = this.state;
    const { navigate, openDrawer } = this.props.navigation;
    if (isLoading)
      return (
        <View style={styles.loader}>
          <Image
            source={require("../assets/loading.gif")}
            styles={styles.loading}
          />
        </View>
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
                  opacity: 1,
                  marginTop: 40
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
                <Right>
                  <Icon
                    name="menu"
                    style={{ color: "white" }}
                    onPress={() => openDrawer()}
                  />
                </Right>
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
                        {data[data.length - 1].temp_inside.toFixed(1) + "°C"}
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
                        {data[data.length - 1].humidity.toFixed(1) + "%"}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.icons}>
                    {/* <Text>WindowOpen</Text>
                <Text>WaterOn</Text> */}
                  </View>
                </View>
                <View style={styles.bottomHalf}>
                  <View>
                    <View style={styles.wrap}>
                      <View style={styles.BottomRight}>
                        <View style={styles.soil}>
                          <Text
                            style={{
                              fontWeight: "bold",
                              color: "white",
                              textAlign: "right"
                            }}
                          >
                            Soil Moisture:
                          </Text>
                          <Text
                            style={{
                              fontSize: 50,
                              fontWeight: "500",
                              color: "white"
                            }}
                          >
                            {(data[data.length - 1].soil_moist / 1000).toFixed(
                              1
                            ) + "%"}
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              fontWeight: "bold",
                              color: "white",
                              textAlign: "left"
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
                            {data[data.length - 1].temp_out.toFixed(1) + "°C"}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.readings}>
                      <View>
                        <Text
                          style={{
                            textAlign: "left",
                            fontWeight: "bold",
                            color: "white"
                          }}
                        >
                          Last reading:
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "500",
                            color: "white"
                          }}
                        >
                          {data[data.length - 1].created_at.slice(0, 19)}
                        </Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          style={styles.refreshButton}
                          onPress={() => this.refreshPage()}
                        >
                          <Text style={{ fontSize: 20, color: "white" }}>
                            Refresh
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.bottom}>
                      <Text
                        style={{
                          fontSize: 40,
                          fontWeight: "500",
                          color: "white",
                          marginBottom: 20
                        }}
                      >
                        Cactus
                      </Text>
                      <Image
                        style={styles.plant}
                        source={greenhouseplant}
                      ></Image>
                      <View style={styles.wrap1}>
                        <TouchableOpacity
                          style={styles.button1}
                          onPress={() => this.setWindowStatus()}
                        >
                          <Text style={styles.text}>Open</Text>
                          <Text style={styles.text}>Window</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={() => this.setWaterStatus()}
                        >
                          <Text style={styles.text}>Water</Text>
                          <Text style={styles.text}>On</Text>
                        </TouchableOpacity>
                      </View>
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
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  button: {
    borderRadius: 100,
    borderColor: "grey",
    borderWidth: 1,
    padding: 20,
    margin: 10,
    opacity: 1
  },
  button1: {
    borderRadius: 100,
    borderColor: "grey",
    borderWidth: 1,
    padding: 20,
    margin: 10,
    opacity: 1
  },
  topHalf: {
    flex: 1,
    flexDirection: "column",
    margin: 10
  },

  temperature: {
    borderWidth: 2,
    borderColor: "transparent",
    borderBottomColor: "grey",
    textAlign: "right",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  wrap1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  BottomRight: {
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },

  plant: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white"
  },
  background: { width: "100%", height: "100%" },
  loader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  refreshButton: {
    borderRadius: 100,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    opacity: 1,
    justifyContent: "flex-end"
  },
  readings: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  }
});

export default MyGarden;
