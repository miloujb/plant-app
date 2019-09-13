import React from "react";
// import { styleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";
import MyGarden from "./Screens/MyGarden";
import MyPlants from "./Screens/MyPlants";

const AppStackNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  MyGarden: { screen: MyGarden },
  MyPlants: { screen: MyPlants }
});

const App = createAppContainer(AppStackNavigator);
export default App;
