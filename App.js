import React, { Component } from "react";
// import { styleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";
import MyGarden from "./Screens/MyGarden";
import MyPlants from "./Screens/MyPlants";
import { View } from "native-base";
import { createDrawerNavigator } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/Ionicons";


const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#3a9ad3"
        },
        headerTitle: "Home",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: "white" }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const GardenNavigator = createStackNavigator(
  {
    Garden: MyGarden
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#3a9ad3"
        },
        headerTitle: "My Garden",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: "white" }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const PlantsNavigator = createStackNavigator(
  {
    Plants: MyPlants
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: "#3a9ad3"
        },
        headerTitle: "My Plants",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: "white" }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

export const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeNavigator,
    Garden: GardenNavigator,
    PlantsNavigator: MyPlants
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: "rgba(255, 255, 255, 9)",
    overlayColor: "#6b52ae",
    contentOptions: {
      activeTintColor: "#fff"
    }
  }
);

const AppStackNavigator = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Garden: { screen: MyGarden },
  Plants: { screen: MyPlants }
});

const App = createAppContainer(AppStackNavigator);
export default App;
