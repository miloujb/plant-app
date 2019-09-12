import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, withNavigation } from "react-navigation";
import MyGarden from "../Screens/MyGarden";
import HomeScreen from "../Screens/HomeScreen";

const LogInButton = createStackNavigator({
  Home: { screen: HomeScreen },
  MyGarden: { screen: MyGarden }
});

const Appp = createAppContainer(LogInButton);
export default Appp;

